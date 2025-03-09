import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";

@Component({
    standalone: true,
    selector: "team",
    templateUrl: "./team.component.html",
    imports: [TitleSectionComponent, WrapperSectionComponent],
})
export class TeamComponent {
    id: string = "team";
    supTitle: string = "For all devices";
    title: string = "Unique design";
    description: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
