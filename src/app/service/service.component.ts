import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";

@Component({
    standalone: true,
    selector: "service",
    templateUrl: "./service.component.html",
    imports: [TitleSectionComponent, WrapperSectionComponent],
})
export class ServiceComponent {
    id: string = "service";
    supTitle: string = "We work with";
    title: string = "Amazing Services";
}
