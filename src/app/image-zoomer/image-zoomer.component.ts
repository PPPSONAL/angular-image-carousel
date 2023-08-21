import { Component } from '@angular/core';
import { makeElementDraggable, makeElementZoomable } from '../utils';
@Component({
  selector: 'app-image-zoomer',
  templateUrl: './image-zoomer.component.html',
  styleUrls: ['./image-zoomer.component.scss']
})
export class ImageZoomerComponent {
  isZoomed: boolean = false;
  zoomableEl: any;
  draggableEl: any;
  constructor() { }
  ngOnInit(): void {
    this.resetZoom();
    setTimeout(() => {  
      this.draggableEl = makeElementDraggable({
        element: document.querySelector('#picture') as HTMLElement,
        isOverflowHiddenDesired: true,
      });

      this.zoomableEl = makeElementZoomable({
        element: document.querySelector('#picture') as HTMLElement,
        steps: 40,
      });
      this.isZoomed = true;
    }, 100);
  }

  initZoom(){
    if(!this.isZoomed){
      setTimeout(() => {  
      this.draggableEl = makeElementDraggable({
        element: document.querySelector('#picture') as HTMLElement,
        isOverflowHiddenDesired: true,
      });
  
      this.zoomableEl = makeElementZoomable({
        element: document.querySelector('#picture') as HTMLElement,
        steps: 40,
      });
      this.isZoomed = true;
      }, 100);
    }
  }
  
  resetZoom(){
    if(this.isZoomed){
      this.zoomableEl.stopZoomableBehavior();
      this.draggableEl.stopDraggableBehavior();
      this.isZoomed = false;
    }
  }
}
