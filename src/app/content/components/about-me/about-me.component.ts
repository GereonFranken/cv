import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";

const TIME_INTERVAL_SECONDS = 4;

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
  animations: [
    trigger("fade", [
      transition("* => *", [
        animate("2s", keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0.5 }),
          style({ opacity: 1 }),
        ])),
      ]),
    ]),
  ],
})
export class AboutMeComponent implements OnInit {

  disableAnimations = true;
  fadeInImg = true;
  selectedLanguage: "english" | "german" = "english";
  picPointer = 0;
  profilePicPaths = [
    "assets\\img\\profile_pic1.jpg",
    "assets\\img\\profile_pic2.jpg",
  ];
  defaultChecked = true;
  onMobile = false;

  constructor(private cvStore: Store) {}

  ngOnInit(): void {
    this.cvStore.select((state) => state.cvState.onMobile).subscribe((onMobile) => (this.onMobile = onMobile));
    setInterval(() => {
      this.fadeInImg = !this.fadeInImg;
      setTimeout(() => this.picPointer = (this.picPointer + 1) % this.profilePicPaths.length, 1000);
    }, TIME_INTERVAL_SECONDS * 1000);
  }

  ngAfterViewInit(): void {
    this.disableAnimations = false;
  }
}
