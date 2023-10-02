import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

export const pagesRoutes: Routes = [
    { path: 'dashboard', component: BlankPageComponent },
    { path: 'bpage', component: BlankPageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'images', component: ImageGalleryComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'htimeline', component: HorizontalTimelineComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'invoices', component: InvoicesComponent },
    { path: 'sresult', component: SearchResultsComponent },
    { path: 'hclasses', component: HelperClassesComponent },
    { path: 'tboard', component: TeamsBoardComponent },
    { path: 'plist', component: ProjectsListComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'faq', component: FAQComponent },
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
