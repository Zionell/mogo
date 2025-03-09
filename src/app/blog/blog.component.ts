import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";

@Component({
    standalone: true,
    selector: "blog",
    templateUrl: "./blog.component.html",
    imports: [TitleSectionComponent, WrapperSectionComponent],
})
export class BlogComponent {
    id: string = "blog";
    supTitle: string = "Our stories";
    title: string = "Latest blog";
}
