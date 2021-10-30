import { Component, HostListener, OnInit, ViewEncapsulation } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { SetOnMobile } from "src/app/state/cv.actions";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  allTabs = ['About Me', 'Background', 'Skills', 'Experiences', 'Passions'];
  profilbildPath = ".\\assets\\img\\profilbild1.jpg";
  selectedTab = 0;
  swipeCoord: [number, number];
  swipeTime: number;
  onMobile = false;
  leftUnselectedList = [];
  rightUnselectedList = [];
  constructor(private cvStore: Store) {}

  ngOnInit(): void {
    this.getScreenWidth();
    this.validateUnselectedTabs();
    this.cvStore.select(state => state.cvState.onMobile).subscribe(onMobile => this.onMobile = onMobile);
  }

  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?) {
    if (window.innerHeight > window.innerWidth && this.onMobile === false) this.cvStore.dispatch(new SetOnMobile(true));
    else if (window.innerHeight < window.innerWidth && this.onMobile === true) this.cvStore.dispatch(new SetOnMobile(false));
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY,
    ];
    const time = new Date().getTime();
    if (when === "start") {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === "end") {
      const direction = [
        coord[0] - this.swipeCoord[0],
        coord[1] - this.swipeCoord[1],
      ];
      const duration = time - this.swipeTime;
      if (
        duration < 1000 &&
        Math.abs(direction[0]) > 30 && // Long enough
        Math.abs(direction[0]) > Math.abs(direction[1] * 3) // Horizontal enough
      ) {
        const swipe = direction[0] < 0 ? "next" : "pervious";
        if (swipe === "next") {
          const isFirst = this.selectedTab === 0;
          if (this.selectedTab <= 3) {
            this.selectedTab = isFirst ? 1 : this.selectedTab + 1;
          }
        } else {
          if (this.selectedTab >= 1) {
            this.selectedTab = this.selectedTab - 1;
          }
        }
        this.validateUnselectedTabs()
      }
    }
  }

  validateUnselectedTabs() {
    this.leftUnselectedList = [];
    this.rightUnselectedList = [];
    this.allTabs.forEach((tab, i) => {
      if (i < this.selectedTab) this.leftUnselectedList.push(tab);
      else if (i > this.selectedTab) this.rightUnselectedList.push(tab);
    })
  }

}
