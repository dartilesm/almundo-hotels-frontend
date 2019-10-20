import { DIRECTORY } from './../constants/directory.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'directory'
})
export class DirectoryPipe implements PipeTransform {

  transform(fileName: string, directory: DIRECTORY): any {
    let pathDirectory = '';
    switch (directory) {
      case DIRECTORY.AMENITIES:
        pathDirectory = `assets/icons/amenities/${fileName}.svg`;
        break;

      case DIRECTORY.HOTELS:
        pathDirectory = `assets/images/hotels/${fileName}`;
        break;

      case DIRECTORY.LOGO:
        pathDirectory = `assets/images/${fileName}`;
        break;
    }
    return pathDirectory;
  }

}
