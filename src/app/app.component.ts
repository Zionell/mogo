import { Component } from "@angular/core";
import { HeroBlockComponent } from "./hero-block/hero-block.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { DeviceComponent } from "./device/device.component";
import { TeamComponent } from "./team/team.component";
import { WorksComponent } from "./works/works.component";
import { BlogComponent } from "./blog/blog.component";
import { ClientsComponent } from "./clients/clients.component";
import { CountsComponent } from "./counts/counts.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { TheFooterComponent } from "./the-footer/the-footer.component";
import { TheMapComponent } from "./the-map/the-map.component";
import { WhatWeDoComponent } from "./what-we-do/what-we-do.component";
import { BannerComponent } from "./banner/banner.component";

@Component({
    standalone: true,
    selector: "app-root",
    imports: [
        HeroBlockComponent,
        AboutComponent,
        ServiceComponent,
        DeviceComponent,
        TeamComponent,
        WorksComponent,
        BlogComponent,
        ClientsComponent,
        CountsComponent,
        ReviewsComponent,
        TheFooterComponent,
        TheMapComponent,
        WhatWeDoComponent,
        BannerComponent
    ],
    templateUrl: "app.component.html",
})
export class AppComponent {}
