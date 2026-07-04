import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { TitleSectionComponent } from "../title-section/title-section.component";

@Component({
    standalone: true,
    selector: "device",
    templateUrl: "./device.component.html",
    imports: [TitleSectionComponent, NgOptimizedImage],
})
export class DeviceComponent {
    supTitle: string = "For all devices";
    title: string = "Unique design";
}
