import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";

@Component({
    standalone: true,
    selector: "works",
    templateUrl: "./works.component.html",
    imports: [TitleSectionComponent, WrapperSectionComponent],
})
export class WorksComponent {
    id: string = "works";
    supTitle: string = "What we do";
    title: string = "some of our work";
    description: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
