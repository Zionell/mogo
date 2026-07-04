import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    standalone: true,
    selector: "the-map",
    templateUrl: "./the-map.component.html",
    imports: [NgOptimizedImage],
})
export class TheMapComponent {
    mapLink: string =
        "https://www.google.com/maps/search/?api=1&query=San+Francisco";
}
