import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";
import { NgFor, NgOptimizedImage } from "@angular/common";
import { IAboutCard } from "./about.types";

@Component({
    standalone: true,
    selector: "about",
    imports: [
        WrapperSectionComponent,
        TitleSectionComponent,
        NgFor,
        NgOptimizedImage,
    ],
    templateUrl: "./about.component.html",
})
export class AboutComponent {
    id: string = "about";
    supTitle: string = "What we do";
    title: string = "Story about us";
    description: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    aboutCards: IAboutCard[] = [
        {
            img: "/images/about/1.jpg",
            icon: "fas fa-user-friends",
            text: "super team",
        },
        {
            img: "/images/about/2.jpg",
            icon: "fas fa-user-friends",
            text: "super team",
        },
        {
            img: "/images/about/3.jpg",
            icon: "fas fa-user-friends",
            text: "super team",
        },
    ];
}
