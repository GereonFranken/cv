import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
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

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.httpClient.get("http://127.0.0.1:5002/next-move").subscribe((data) => {
      this.board = this.sanitizer.bypassSecurityTrustHtml(data["svg_board"]);
      setTimeout(() => this.applyEventHandlers, 500);
    });
  }

  onFigureDrag(event: MouseEvent, type: "figure" | "square") {
    console.log({ event, type });
    if (type === "figure") {
      if (this.figureClicked) {
        // remove highlighting of possible moves
        this.figureClicked = false;
      } else {
        // highlight legel possible moves
        this.figureClicked = true;
        this.moveInProgress.concat(event.target["classList"][2]);
      }
    } else {
      if (this.figureClicked) {
        const newMove = this.moveInProgress.concat(
          event.target["classList"][2]
        );
        // POST api call to push new move
        this.figureClicked = false;
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
          this.onFigureDrag(event, "figure")
        );
      }
      if (svgChildren[i].classList[0] === "square") {
        svgChildren[i].addEventListener("click", (event: MouseEvent) =>
          this.onFigureDrag(event, "square")
        );
      }
    }
  }
}
