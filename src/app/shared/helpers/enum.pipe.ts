import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'enumValue',
})
export class EnumValue implements PipeTransform {
  transform(v: number, e: any): string {
    return Object.values<string>(e)[v];
  }
}
