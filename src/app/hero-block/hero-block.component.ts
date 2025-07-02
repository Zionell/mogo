import { Component, inject } from "@angular/core";
import { TheHeaderComponent } from "../the-header/the-header.component";
import { ScrollToService } from "../scroll-to.service";
import { NgOptimizedImage } from "@angular/common";

@Component({
    standalone: true,
    selector: "hero-block",
    templateUrl: "./hero-block.component.html",
    imports: [TheHeaderComponent, NgOptimizedImage],
    providers: [ScrollToService],
})
export class HeroBlockComponent {
    private scrollToService = inject(ScrollToService);

    subTitle: string = "Creative Template";
    title: string = "Welcome <br> to MoGo";
    btnText: string = "Learn more";

    tabs: string[] = ["Intro", "Work", "About", "Contacts"];

    handleClick(): void {
        this.scrollToService.scrollTo("about");
    }
}
