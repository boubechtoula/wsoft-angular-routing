import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tet'
})
export class TetPipe implements PipeTransform {

  transform(value: string ): string {
    return "cdgfdg";
  }

}