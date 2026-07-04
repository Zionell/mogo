import {
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
    afterNextRender,
} from "@angular/core";
import { NgFor, NgOptimizedImage } from "@angular/common";
import { register } from "swiper/element/bundle";
import { IReview } from "./reviews.types";

@Component({
    standalone: true,
    selector: "reviews",
    templateUrl: "./reviews.component.html",
    imports: [NgFor, NgOptimizedImage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsComponent implements OnInit {
    @Input() quote: string =
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”";
    @Input() author: string = "Jon Doe";

    @ViewChild("swiperEl")
    swiperEl!: ElementRef<HTMLElement & { swiper?: any }>;

    slides: IReview[] = [];

    constructor() {
        // register the swiper custom elements only after hydration,
        // otherwise swiper restructures the SSR DOM and hydration fails (NG0500)
        afterNextRender(() => {
            if (!customElements.get("swiper-container")) {
                register();
            }
        });
    }

    ngOnInit(): void {
        this.slides = [
            { quote: this.quote, author: this.author },
            {
                quote: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.”",
                author: "Matthew Dix",
            },
            {
                quote: "“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.”",
                author: "Nick Karvounis",
            },
        ];
    }

    slidePrev(): void {
        this.swiperEl?.nativeElement.swiper?.slidePrev();
    }

    slideNext(): void {
        this.swiperEl?.nativeElement.swiper?.slideNext();
    }
}
