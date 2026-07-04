import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { ILogo } from "./banner.types";

@Component({
    standalone: true,
    selector: "banner",
    templateUrl: "./banner.component.html",
    imports: [NgOptimizedImage],
})
export class BannerComponent {
    logos: ILogo[] = [
        {
            img: "/images/logos/1.png",
            alt: "Hipster Barbershop",
            width: 110,
            height: 110,
        },
        {
            img: "/images/logos/2.png",
            alt: "ABCD arrows",
            width: 89,
            height: 92,
        },
        {
            img: "/images/logos/3.png",
            alt: "Design Quality 1980",
            width: 128,
            height: 127,
        },
        {
            img: "/images/logos/4.png",
            alt: "Hipster Barbershop since 1984",
            width: 119,
            height: 95,
        },
        {
            img: "/images/logos/5.png",
            alt: "Hipster Barbershop since 1984",
            width: 114,
            height: 118,
        },
        {
            img: "/images/logos/6.png",
            alt: "Studio Designer since 1980",
            width: 110,
            height: 119,
        },
    ];
}
