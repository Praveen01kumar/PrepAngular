import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { TeamsBoardComponent } from './teams-board/teams-board.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FAQComponent } from './faq/faq.component';
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BlankPageComponent,
    ProfileComponent,
    ImageGalleryComponent,
    TimelineComponent,
    HorizontalTimelineComponent,
    PricingComponent,
    InvoicesComponent,
    SearchResultsComponent,
    HelperClassesComponent,
    TeamsBoardComponent,
    ProjectsListComponent,
    MaintenanceComponent,
    TestimonialsComponent,
    FAQComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
