import { Component, inject } from "@angular/core";
import { IMenuItem } from "../menu.types";
import { ScrollToService } from "../scroll-to.service";

@Component({
    standalone: true,
    selector: "the-header",
    templateUrl: "./the-header.component.html",
    providers: [ScrollToService],
})
export class TheHeaderComponent {
    private scrollToService = inject(ScrollToService);

    logo: string = "MoGo";

    menuItems: IMenuItem[] = [
        {
            label: "About",
            value: "about",
        },
        {
            label: "Service",
            value: "service",
        },
        {
            label: "Works",
            value: "works",
        },
        {
            label: "Blog",
            value: "blog",
        },
        {
            label: "Contact",
            value: "contact",
        },
    ];

    handleClick(value?: string): void {
        this.scrollToService.scrollTo(value ?? "");
    }
}
