import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { IWork } from "./works.types";
import { NgClass, NgFor, NgOptimizedImage } from "@angular/common";

@Component({
    standalone: true,
    selector: "works",
    templateUrl: "./works.component.html",
    imports: [TitleSectionComponent, NgFor, NgOptimizedImage, NgClass],
})
export class WorksComponent {
    id: string = "works";
    supTitle: string = "What we do";
    title: string = "some of our work";
    description: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    worksCards: IWork[] = [
        {
            image: "/images/works/1.png",
            title: "creatively designed",
            description: "Lorem ipsum dolor sit",
            link: "#",
        },
        {
            image: "/images/works/2.png",
            title: "creatively designed",
            description: "Lorem ipsum dolor sit",
            link: "#",
        },
        {
            image: "/images/works/3.png",
            title: "creatively designed",
            description: "Lorem ipsum dolor sit",
            link: "#",
        },
        {
            image: "/images/works/4.png",
            title: "creatively designed",
            description: "Lorem ipsum dolor sit",
            link: "#",
        },
        {
            image: "/images/works/5.png",
            title: "creatively designed",
            description: "Lorem ipsum dolor sit",
            link: "#",
            isLarge: true,
        },
        {
            image: "/images/works/6.png",
            title: "creatively designed",
            description: "Lorem ipsum dolor sit",
            link: "#",
        },
        {
            image: "/images/works/7.png",
            title: "creatively designed",
            description: "Lorem ipsum dolor sit",
            link: "#",
        },
    ];
}
