import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  scrPrtg: number = 0;

  sidebarTog: boolean = true;
  @ViewChild('visitorsChart', { static: true }) visitorsChart!: ElementRef;
  visitorChart!: Chart;
  @ViewChild('visitsChart', { static: true }) visitsChart!: ElementRef;
  visitChart!: Chart;
  constructor(public dataService: SharedService) { }

  sideBarArr: any[] = [
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-house-door", title: "Dashboard", route: "dash/analytical",
      subTitleArr: [
        { title: "Analytical", routein: "dash/analytical", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Demographic", routein: "dash/demographic", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Hospital", routein: "dash/hospital", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "University", routein: "dash/university", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Real Estate", routein: "dash/realestate", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Project", routein: "dash/project", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Cryptocurrency", routein: "dash/cryptocurrency", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "eCommerce", routein: "dash/ecommerce", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "IoT", routein: "dash/iot", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-grid", title: "App", route: "app/mail",
      subTitleArr: [
        { title: "Inbox", routein: "app/mail", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Chat", routein: "app/chat", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Calendar", routein: "app/calender", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Contact list", routein: "app/contactlist", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Contact Card", routein: "app/contactcard", badge: { txt: "New", isBadge: true, badgeWar: true, badgeDef: false, badgeSucc: false } },
        { title: "Taskboard", routein: "app/taskboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Admin", routein:"app/admin", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } }
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-folder", title: "File Manager", route: "file/dashboard",
      subTitleArr: [
        { title: "Dashboard", routein: "file/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Documents", routein: "file/document", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Media", routein: "file/media", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Images", routein: "file/images", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } }
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-globe", title: "Blog", route: "blog/dashboard",
      subTitleArr: [
        { title: "Dashboard", routein: "blog/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "New Post", routein: "blog/newpost", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Blog List", routein: "blog/bloglist", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Blog Detail", routein: "blog/blogdetail", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } }
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-gem", title: "UI Elements", route: "uielenents/dashboard",
      subTitleArr: [
        { title: "Typography", routein: "uielenents/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Tabs", routein: "uielenents/tabs", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Buttons", routein: "uielenents/buttons", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Bootstrap UI", routein: "uielenents/bootstrapui", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Icons", routein: "uielenents/icons", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Notifications", routein: "uielenents/notifications", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Colors", routein: "uielenents/colors", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Dialogs", routein: "uielenents/dialogs", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "List Group", routein: "uielenents/listgroup", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Media Object", routein: "uielenents/mediaobject", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Modals", routein: "uielenents/modals", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Nestable", routein: "uielenents/nestable", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Progress Bars", routein: "uielenents/progressbar", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Range Sliders", routein: "uielenents/rangesliders", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Treeview", routein: "uielenents/treeview", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } }
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-puzzle", title: "Widgets", route: "widgets/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "widgets/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Statistics", routein: "widgets/statistics", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Data", routein: "widgets/data", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Chart", routein: "widgets/chart", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Weather", routein: "widgets/weather", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Social", routein: "widgets/social", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Blog", routein: "widgets/blog", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "eCommerce", routein: "widgets/ecommerce", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-file-lock2", title: "Authentication", route: "authentication/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "authentication/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Login", routein: "authentication/login", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Register", routein: "widgets/register", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Lockscreen", routein: "widgets/lockscreen", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Forgot Password", routein: "widgets/fpassword", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Page 404", routein: "widgets/p404", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Page 403", routein: "widgets/p403", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Page 500", routein: "widgets/p500", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Page 503", routein: "widgets/p503", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-files", title: "Pages", route: "pages/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "pages/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Blank Page", routein: "pages/bpage", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Profile1", routein: "pages/profile1", badge: { txt: "v1", isBadge: true, badgeWar: false, badgeDef: true, badgeSucc: false } },
        { title: "Profile2", routein: "pages/profile2", badge: { txt: "v2", isBadge: true, badgeWar: true, badgeDef: false, badgeSucc: false } },
        { title: "Image Gallery 1", routein: "pages/img1", badge: { txt: "v1", isBadge: true, badgeWar: false, badgeDef: true, badgeSucc: false } },
        { title: "Image Gallery 2", routein: "pages/img2", badge: { txt: "v2", isBadge: true, badgeWar: true, badgeDef: false, badgeSucc: false } },
        { title: "Timeline", routein: "pages/timeline", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Horizontal Timeline", routein: "pages/htimeline", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Pricing", routein: "pages/pricing", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Invoices1", routein: "pages/invoices1", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Invoices2", routein: "pages/invoices2", badge: { txt: "v2", isBadge: true, badgeWar: true, badgeDef: false, badgeSucc: false } },
        { title: "Search Results", routein: "pages/sresult", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Helper Classes", routein: "pages/hclasses", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Teams Board", routein: "pages/tboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Projects List", routein: "pages/plist", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Maintenance", routein: "pages/maintenance", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Testimonials", routein: "pages/testimonials", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "FAQ", routein: "pages/faq", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-pencil", title: "Forms", route: "forms/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "forms/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Form Validation", routein: "forms/fvalidation", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Advanced Elements", routein: "forms/aelements", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Basic Elements", routein: "forms/belements", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Form Wizard", routein: "forms/fwizard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Drag &amp; Drop Upload", routein: "forms/ddupload", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Image Cropping", routein: "forms/icropping", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Summernote", routein: "forms/summernote", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "CKEditor", routein: "forms/ckeditor", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Markdown", routein: "forms/markdown", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-table", title: "Tables", route: "tables/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "tables/dashboard", badge: { txt: "New", isBadge: true, badgeWar: false, badgeDef: false, badgeSucc: true } },
        { title: "Tables Example", routein: "tables/texample", badge: { txt: "New", isBadge: true, badgeWar: false, badgeDef: false, badgeSucc: true } },
        { title: "Normal Tables", routein: "tables/ntables", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Jquery Datatables", routein: "tables/jdatatables", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Editable Tables", routein: "tables/etables", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Tables Color", routein: "tables/tcolor", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Blog", routein: "tables/blog", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "eCommerce", routein: "tables/ecommerce", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Table Filter", routein: "tables/tfilter", badge: { txt: "New", isBadge: true, badgeWar: false, badgeDef: false, badgeSucc: true } },
        { title: "Table dragger", routein: "tables/tdragger", badge: { txt: "New", isBadge: true, badgeWar: false, badgeDef: false, badgeSucc: true } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-pie-chart", title: "Charts", route: "charts/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "charts/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Morris", routein: "charts/morris", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Flot", routein: "charts/flot", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "ChartJS", routein: "charts/chartjs", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Jquery Knob", routein: "charts/jqueryknob", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Sparkline Chart", routein: "charts/sparklinechart", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Peity", routein: "charts/peity", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "C3 Charts", routein: "charts/c3charts", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Gauges", routein: "charts/gauges", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-map", title: "Maps", route: "maps/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "maps/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Google Map", routein: "maps/gmap", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Yandex Map", routein: "maps/ymap", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "jVector Map", routein: "maps/jvmap", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-grid", title: "Drag And Drop", route: "draganddrop/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "draganddrop/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Drag 1", routein: "draganddrop/drag1", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Drag 2", routein: "draganddrop/drag2", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Drag 3", routein: "draganddrop/drag3", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Drag 4", routein: "draganddrop/drag4", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Drag 5", routein: "draganddrop/drag5", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-tags", title: "Menu Level 1", route: "mlevel1/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "mlevel1/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 1", routein: "mlevel1/level11", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 2", routein: "mlevel1/level12", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 3", routein: "mlevel1/level13", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 4", routein: "mlevel1/level14", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 5", routein: "mlevel1/level15", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-tags", title: "Menu Level 2", route: "mlevel2/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "mlevel2/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 1", routein: "mlevel2/level21", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 2", routein: "mlevel2/level22", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 3", routein: "mlevel2/level23", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 4", routein: "mlevel2/level24", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "Link 5", routein: "mlevel2/level25", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
    {
      id: Math.floor(Math.random() * 1000 + 100), color: "#49c5b6", icon: "bi bi-tags", title: "More", route: "more/dashboard", subTitleArr: [
        { title: "Dashboard", routein: "more/dashboard", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "About", routein: "more/about", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
        { title: "AI'S", routein: "more/ais", badge: { txt: "New", isBadge: false, badgeWar: false, badgeDef: false, badgeSucc: false } },
      ]
    },
  ];

  listArr: any[] = this.dataService?.dataArr;
  btmArr: any[] = ['Lost', 'Abendent', 'Won'];

  ngOnInit(): void {
    this.sendYourData();
    this.createChart();
    this.dataService.getScrollPercentage().subscribe((per: number) => { this.scrPrtg = per; });

  }

  sendYourData() { this.dataService.dragArrData$.next({ listArr: this.listArr, btmArr: this.btmArr }); };

  createChart() {
    //Visitors chart 
    this.visitorChart = new Chart(this.visitorsChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [{
          label: "Visitors", data: ['573', '376', '800', '272', '479'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)',
          borderWidth: 1, pointRadius: 2, pointBackgroundColor: 'rgba(247, 0, 28, 0.6)', pointBorderColor: 'rgba(247, 0, 28, 0.6)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, tooltip: { callbacks: { title: function () { return '' } } } },

      }
    });

    //visits chart
    this.visitChart = new Chart(this.visitsChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [{
          label: "Visits", data: ['73', '376', '272', '479', '12'],
          backgroundColor: 'rgba(247, 0, 28, 0.6)', borderColor: 'rgba(247, 0, 28, 0.6)',
          borderWidth: 1, pointRadius: 2, pointBackgroundColor: 'rgba(75, 192, 192, 0.6)', pointBorderColor: 'rgba(75, 192, 192, 0.6)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, tooltip: { callbacks: { title: function () { return '' } } } },

      }
    });
  }


}
