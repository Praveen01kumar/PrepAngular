import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { aisArr, chipArr, features, pricing } from 'src/app/shared/interfaces/interfaces';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-ais',
  templateUrl: './ais.component.html',
  styleUrls: ['./ais.component.scss']
})
export class AisComponent implements OnInit {

  selectedValue: string = 'All';
  pricing!: pricing;
  features!: features;
  chipArr: chipArr[] | any[] = [];
  cardsArr: aisArr[] = [];
  aiFilterByName: any[] = [];
  searchArr: any[] = [];
  selectArr: string[] = ["All", "verified", "new", "popular"];
  allpricingComplete: boolean = false;
  allfeaturesComplete: boolean = false;
  @ViewChild(MatMenuTrigger) filterTrigger!: MatMenuTrigger;
  currentPage:number = 1;
  totalPages:number = 20;
  constructor(public SharedService: SharedService, private apiService: ApiService) { }

  ngOnInit(): void { this.onInitCall(); }

  onInitCall() {
    this.apiService.getAis().subscribe((res: any) => {
      if (res) {
        this.cardsArr = res.aisArr;
        this.chipArr = res.chipArr;
        this.pricing = res.pricing;
        this.features = res.features;
        this.aiFilterByName = this.cardsArr;
      }
    });
  }

  searchAiByName(event: any) {
    this.cardsArr = this.aiFilterByName;
    this.cardsArr = this.cardsArr?.filter(i => (i?.name)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }
  searchAiByCategory(event: any) {
    this.cardsArr = this.aiFilterByName;
    this.cardsArr = this.cardsArr?.filter(i => (i?.hashtag?.reduce((ha: any, t: any) => ha + " " + t))?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }
  searchAiByvnpai(event: any) {
    this.selectedValue = event?.value;
    this.cardsArr = this.aiFilterByName;
    this.cardsArr = this.cardsArr?.filter(i => (i?.vnpai)?.toLowerCase()?.indexOf((event?.value === 'All' ? '' : event?.value)?.toLocaleLowerCase()) !== -1);
  }
  gotIaPage(url: any) { window.open(this.SharedService.Url(url), '_blank') }
  next(): void { this.chipArr.unshift(this.chipArr.pop()); }
  previous(): void { this.chipArr.push(this.chipArr.shift()); }
  chipFilter(name: string): void {
    this.cardsArr = this.aiFilterByName;
    const index = this.chipArr.findIndex((el: any) => el.name === name);
    this.chipArr[index].active = !this.chipArr[index].active;
    this.chipArr[index].active ? this.searchArr.push(name) : this.searchArr.splice(this.searchArr.indexOf(name), 1);
    this.cardsArr = this.cardsArr.filter((cd: any) => this.searchArr.every((st: any) => cd.hashtag.includes(st)));
  }
  updateAllPricing() { this.allpricingComplete = this.pricing?.pricingType != null && this.pricing.pricingType?.every((t: any) => t?.completed); }
  somePricing(): boolean {
    if (this.pricing.pricingType == null) { return false; }
    return this.pricing.pricingType.filter((t: any) => t.completed).length > 0 && !this.allpricingComplete;
  }
  setAllPricing(completed: boolean) {
    this.allpricingComplete = completed;
    if (this.pricing.pricingType == null) { return; }
    this.pricing.pricingType.forEach((t: any) => (t.completed = completed));
  }
  updateAllFeatures() { this.allfeaturesComplete = this.features?.featuresType != null && this.features.featuresType?.every((t: any) => t?.completed); }
  someFeatures(): boolean {
    if (this.features.featuresType == null) { return false; }
    return this.features.featuresType.filter((t: any) => t.completed).length > 0 && !this.allfeaturesComplete;
  }
  setAllFeatures(completed: boolean) {
    this.allfeaturesComplete = completed;
    if (this.features.featuresType == null) { return; }
    this.features.featuresType.forEach((t: any) => (t.completed = completed));
  }
  clearFilter() {
    this.cardsArr = this.aiFilterByName;
    this.filterTrigger.closeMenu();
  }
  applyFilter() {
    this.cardsArr = this.aiFilterByName;
    const pricing: any[] = this.pricing?.pricingType?.filter((item: any) => item?.completed === true)?.map((item: any) => item?.name);
    const features: any[] = this.features?.featuresType?.filter((item: any) => item?.completed === true)?.map((item: any) => item?.name);
    const filterBy: any[] = [...pricing, ...features];
    this.cardsArr = this.cardsArr.filter(item => {
      const feetypeValues = Object.values(item.feetype);
      return filterBy.every(criteria => feetypeValues.includes(criteria));
    });
    this.filterTrigger.closeMenu();
  }

  get visiblePages(): number[] {
    const range = 1;
    let start = Math.max(1, this.currentPage - range);
    let end = Math.min(this.totalPages, this.currentPage + range);
    if (end - start < (range * 2)) {
      if (start === 1) {
        end = Math.min(end + (range * 2) - (end - start), this.totalPages);
      } else if (end === this.totalPages) { start = Math.max(start - (range * 2) + (end - start), 1); }
    }
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }

  previousPage() { if (this.currentPage > 1) { this.currentPage--; } }
  nextPage() { if (this.currentPage < this.totalPages) { this.currentPage++; } }
  goToPage(page: number) { this.currentPage = page; }
  fistPage(page: number) { this.currentPage = page; }
  lastPage(page: number) { this.currentPage = page; }



}
