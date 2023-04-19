import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataConstants } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-image-carousel';
  @ViewChild('pptContent', { read: ElementRef }) pptContent!: ElementRef;
  scrollLeftcount: number = 0;
  scrollRightcount: number = 1;
  data = DataConstants.fileList
  
  
  checkEnd(e: any){
    this.scrollLeftcount = this.pptContent.nativeElement.scrollLeft;
    this.scrollRightcount = Math.round((this.pptContent.nativeElement.scrollWidth - this.pptContent.nativeElement.clientWidth) - this.pptContent.nativeElement.scrollLeft)
  }

  public scrollRight(): void {
    this.pptContent.nativeElement.scrollTo({ left: (this.pptContent.nativeElement.scrollLeft + 300), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.pptContent.nativeElement.scrollTo({ left: (this.pptContent.nativeElement.scrollLeft - 300), behavior: 'smooth' });
  }
  
  checkVar(ppt: any){
    return ppt.length != 0 ? ppt[0].thumbnail_path : ''
  }
}
