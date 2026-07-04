import { Component } from "@angular/core";
import { NgFor, NgOptimizedImage } from "@angular/common";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { IClient } from "./clients.types";

@Component({
    standalone: true,
    selector: "clients",
    templateUrl: "./clients.component.html",
    imports: [TitleSectionComponent, NgFor, NgOptimizedImage],
})
export class ClientsComponent {
    supTitle: string = "Happy Clients";
    title: string = "What people say";

    clients: IClient[] = [
        {
            img: "/images/clients/1.png",
            name: "Matthew Dix",
            role: "Graphic Design",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
        },
        {
            img: "/images/clients/2.png",
            name: "Nick Karvounis",
            role: "Graphic Design",
            text: "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            img: "/images/clients/3.png",
            name: "Jaelynn Castillo",
            role: "Graphic Design",
            text: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            img: "/images/clients/4.png",
            name: "Mike Petrucci",
            role: "Graphic Design",
            text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
        },
    ];
}
