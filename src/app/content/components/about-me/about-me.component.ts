import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {

  selectedLanguage: "english" | "german" = "english";
  profilePicPath = "assets\\img\\profile_pic1.jpg";
  defaultChecked = true;
  onMobile = false;

  constructor(private cvStore: Store) {}

  ngOnInit(): void {
    this.cvStore.select((state) => state.cvState.onMobile).subscribe((onMobile) => (this.onMobile = onMobile));
  }
}
