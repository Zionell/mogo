import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ScrollToService {
    constructor() {}

    scrollTo(id: string, offset = 0): void {
        const target = document.getElementById(id || "__nuxt");

        if (target) {
            const position =
                target.getBoundingClientRect().top + window.pageYOffset;

            // if (force) {
            window.scroll({
                top: position - offset,
                left: 0,
                behavior: "smooth",
            });
            // } else {
            // gsap.to(window, {
            //     duration: 0.5,
            //     scrollTo: { y: position, offsetY: offset },
            // });
            // }
        }
    }
}
