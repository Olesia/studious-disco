import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'shop';
  @ViewChild('appTitle', { static: false }) projectTitle: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    this.projectTitle.nativeElement.innerText = 'My Shop';
  }
}
