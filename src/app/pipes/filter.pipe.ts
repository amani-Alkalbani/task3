import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.name.toLowerCase().includes(searchText)
     
    });
  }


 
  // transform(collection: any[], searchText: string): any[] {
  //   if (!collection) return [];
  //   if (!searchText) return collection;

  //   searchText = searchText.toLowerCase();
  //   return collection.filter((it) => {
  //     return it.name.toLowerCase().includes(searchText) 
  
  //   });
  // }

  // transform(list: any[], filterText: string): any {
  //   return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  // }
}
