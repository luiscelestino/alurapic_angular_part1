import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  // se meu componente mudou
  ngOnChanges(changes: SimpleChanges): void {
    // se minha propriedade photos mudou
    if (changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}
