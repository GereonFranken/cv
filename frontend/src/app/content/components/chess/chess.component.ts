import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { includes } from "lodash";

const BASE_URL = "http://127.0.0.1:5002";
@Component({
  selector: "app-chess",
  templateUrl: "./chess.component.html",
  styleUrls: ["./chess.component.scss"],
})
export class ChessComponent implements OnInit {
  @ViewChild("myBoard", { read: ElementRef }) myBoard: ElementRef;

  board: SafeHtml;
  figureClicked: boolean = false;
  moveInProgress: string = "";
  currentPossibleMoves: [string, string][] = [];

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.httpClient.get(BASE_URL + "/new-game").subscribe((data) => {
      this.currentPossibleMoves = data["moves"];
      this.board = this.sanitizer.bypassSecurityTrustHtml(data["svg_board"]);
      setTimeout(() => this.applyEventHandlers(), 300);
    });
  }

  onClick(event: MouseEvent, type: "figure" | "square") {
    if (
      this.figureClicked &&
      includes(
        this.currentPossibleMoves.map((move) => move.join("")),
        this.moveInProgress.concat(event.target["classList"][2])
      )
    ) {
      const move = this.moveInProgress.concat(event.target["classList"][2]);
      this.playMove(move);
      this.figureClicked = false;
    } else {
      if (type === 'figure') {
        this.currentPossibleMoves
          .filter((move) => move[0] === this.moveInProgress)
          .forEach((move) => {
            document.getElementById(move[1]).style.removeProperty("fill");
          });
        this.moveInProgress = event.target["previousSibling"]["classList"][2];
        this.showPossibleMoves();
        this.figureClicked = true;
      }
    }
  }

  applyEventHandlers() {
    if (!this.myBoard) return;
    const svgChildren: HTMLCollection =
      this.myBoard.nativeElement.firstChild?.children;
    for (let i = 0; i < svgChildren.length; i++) {
      if (svgChildren[i].id === "figure") {
        svgChildren[i].addEventListener("click", (event: MouseEvent) =>
          this.onClick(event, "figure")
        );
      }
      if (svgChildren[i].classList[0] === "square") {
        svgChildren[i].id = svgChildren[i].classList[2];
        svgChildren[i].addEventListener("click", (event: MouseEvent) =>
          this.onClick(event, "square")
        );
      }
    }
  }

  playMove(move: string) {
    this.httpClient
      .post(BASE_URL + "/play-move", { move })
      .subscribe((data) => {
        if (data["winner"] !== null) {
          if (data["winner"]) {
            console.log("CONGRATS YOU WON");
          } else {
            console.log("Darn you lost ...");
          }
        } else {
          this.currentPossibleMoves = data["moves"];
          this.board = this.sanitizer.bypassSecurityTrustHtml(data["svg_board"]);
          setTimeout(() => this.applyEventHandlers(), 300);
        }
      });
  }

  showPossibleMoves() {
    this.currentPossibleMoves
      .filter((move) => move[0] === this.moveInProgress)
      .forEach((move) => {
        document.getElementById(move[1]).style.fill = "green";
      });
  }
}
