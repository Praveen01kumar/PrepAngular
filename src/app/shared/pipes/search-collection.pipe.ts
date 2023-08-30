import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCollection'
})
export class SearchCollectionPipe implements PipeTransform {
  transform(items: any[], search?: any): any {
    if(!items)return null;
    if(!search)return items;
    search = search.toLowerCase();
    return items.filter((item: any) => {
        return JSON.stringify(item?.name).toLowerCase().includes(search);
    });
}
}
