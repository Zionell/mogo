import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { NgFor, NgOptimizedImage } from "@angular/common";
import gsap from "gsap";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { WrapperSectionComponent } from "../wrapper-section/wrapper-section.component";
import { IAccordionItem } from "./what-we-do.types";

@Component({
    standalone: true,
    selector: "what-we-do",
    templateUrl: "./what-we-do.component.html",
    imports: [
        WrapperSectionComponent,
        TitleSectionComponent,
        NgFor,
        NgOptimizedImage,
    ],
})
export class WhatWeDoComponent {
    supTitle: string = "Service";
    title: string = "What we do";
    description: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    openedIndex: number | null = 0;
    readonly initialOpenedIndex: number = 0;

    @ViewChildren("panel") panels!: QueryList<ElementRef<HTMLElement>>;

    items: IAccordionItem[] = [
        {
            icon: "/images/service/1.png",
            title: "Photography",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            icon: "/images/service/2.png",
            title: "Creativity",
            text: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            icon: "/images/service/3.png",
            title: "Web Design",
            text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];

    toggle(idx: number): void {
        const panels = this.panels.toArray();
        const prev = this.openedIndex;

        if (prev !== null && prev !== idx) {
            gsap.to(panels[prev].nativeElement, {
                height: 0,
                duration: 0.4,
                ease: "power2.inOut",
            });
        }

        this.openedIndex = prev === idx ? null : idx;
        gsap.to(panels[idx].nativeElement, {
            height: this.openedIndex === idx ? "auto" : 0,
            duration: 0.4,
            ease: "power2.inOut",
        });
    }
}
