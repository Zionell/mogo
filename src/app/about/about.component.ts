import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";

@Component({
    standalone: true,
    selector: "about",
    imports: [WrapperSectionComponent, TitleSectionComponent],
    templateUrl: "./about.component.html",
})
export class AboutComponent {
    id: string = "about";
    supTitle: string = "What we do";
    title: string = "Story about us";
    description: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
