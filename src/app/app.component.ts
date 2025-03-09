import { Component } from "@angular/core";
import { TheHeaderComponent } from "./the-header/the-header.component";
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
import { NgOptimizedImage } from "@angular/common";
import { TheMapComponent } from "./the-map/the-map.component";

@Component({
    standalone: true,
    selector: "app-root",
    imports: [
        TheHeaderComponent,
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
        NgOptimizedImage,
        TheMapComponent,
    ],
    templateUrl: "app.component.html",
})
export class AppComponent {}
