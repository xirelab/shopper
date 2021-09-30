import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "items"
})
export class ItemsPipe implements PipeTransform {
    transform(value: number): any {
        return value.toString() + " items.";
    }
}