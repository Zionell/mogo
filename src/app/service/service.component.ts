import { Component } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";
import { NgFor, NgOptimizedImage } from "@angular/common";
import { ServiceItem } from "./service.types";

@Component({
    standalone: true,
    selector: "service",
    templateUrl: "./service.component.html",
    imports: [
        TitleSectionComponent,
        WrapperSectionComponent,
        NgOptimizedImage,
        NgFor,
    ],
})
export class ServiceComponent {
    id: string = "service";
    supTitle: string = "We work with";
    title: string = "Amazing Services";

    items: ServiceItem[] = [
        {
            title: "Photography",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            imgSrc: "/images/services/1.png",
        },
        {
            title: "Web Design",
            description:
                "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            imgSrc: "/images/services/2.png",
        },
        {
            title: "Creativity",
            description:
                "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            imgSrc: "/images/services/3.png",
        },
        {
            title: "seo",
            description:
                "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            imgSrc: "/images/services/4.png",
        },
        {
            title: "Css/Html",
            description:
                "Lorem dolor sit amet, consectetur adipiscing elit, sed do tempor.",
            imgSrc: "/images/services/5.png",
        },
        {
            title: "digital",
            description:
                "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            imgSrc: "/images/services/6.png",
        },
    ];
}
