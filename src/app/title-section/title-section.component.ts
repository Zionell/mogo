import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "title-section",
    templateUrl: "./title-section.component.html",
})
export class TitleSectionComponent {
    @Input() supTitle!: string;
    @Input() title!: string;
    @Input() description?: string;
}
