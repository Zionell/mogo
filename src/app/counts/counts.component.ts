import { Component } from "@angular/core";
import { IMenuItem } from "../menu.types";

@Component({
    standalone: true,
    selector: "counts",
    templateUrl: "./counts.component.html",
})
export class CountsComponent {
    items: IMenuItem[] = [
        {
            label: "Web Design Projects",
            value: "42",
        },
        {
            label: "happy client",
            value: "123",
        },
        {
            label: "award winner",
            value: "15",
        },
        {
            label: "cup of coffee",
            value: "99",
        },
        {
            label: "members",
            value: "24",
        },
    ];
}
