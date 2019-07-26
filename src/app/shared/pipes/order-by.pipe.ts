import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(products: any[], fieldName: string, isDesc: boolean): any {
    if (fieldName === 'count') {
      if (isDesc) {
        return products.sort((p1, p2) => this.filterFunc(p1[fieldName], p2[fieldName]));
      } else {
        return products.sort((p1, p2) => this.filterFunc(p2[fieldName], p1[fieldName]));
      }
    } else {
      if (isDesc) {
        return products.sort((p1, p2) => this.filterFunc(p1.product[fieldName], p2.product[fieldName]));
      } else {
        return products.sort((p1, p2) => this.filterFunc(p2.product[fieldName], p1.product[fieldName]));
      }
    }
  }

  private filterFunc(a: any, b: any): number {
    return a < b ? -1 : a > b ? 1 : 0;
  }
}
