import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";
import { NgFor, NgOptimizedImage } from "@angular/common";

@Component({
    standalone: true,
    selector: "team",
    templateUrl: "./team.component.html",
    imports: [
        TitleSectionComponent,
        WrapperSectionComponent,
        NgFor,
        NgOptimizedImage,
    ],
})
export class TeamComponent {
    id: string = "team";
    supTitle: string = "Who we are";
    title: string = "Meet our team";
    description: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    teamCards = [
        {
            img: "/images/authors/1.png",
            name: "Matthew Dix",
            role: "Graphic Design",
            socials: [
                { icon: "fab fa-facebook-f", link: "#" },
                { icon: "fab fa-twitter", link: "#" },
                { icon: "fab fa-pinterest-p", link: "#" },
                { icon: "fab fa-instagram", link: "#" },
            ],
        },
        {
            img: "/images/authors/2.png",
            name: "Christopher Campbell",
            role: "Branding/UX design",
            socials: [
                { icon: "fab fa-facebook-f", link: "#" },
                { icon: "fab fa-twitter", link: "#" },
                { icon: "fab fa-pinterest-p", link: "#" },
                { icon: "fab fa-instagram", link: "#" },
            ],
        },
        {
            img: "/images/authors/3.png",
            name: "Michael Fertig",
            role: "Developer",
            socials: [
                { icon: "fab fa-facebook-f", link: "#" },
                { icon: "fab fa-twitter", link: "#" },
                { icon: "fab fa-pinterest-p", link: "#" },
                { icon: "fab fa-instagram", link: "#" },
            ],
        },
    ];
}
