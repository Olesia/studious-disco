import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'shop';
  dateOfLastUpdates = new Date(2019, 7, 23);
  @ViewChild('appTitle', { static: false }) projectTitle: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    this.projectTitle.nativeElement.innerText = 'My Shop';
  }
}
