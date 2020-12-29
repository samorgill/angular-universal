import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-universal';

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  ngOnInit(): void {
    console.log('init');

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('name', 'sam');
      console.log('Browser');
      const name = localStorage.getItem('name');
      console.log('Name ', name);
    }
    if (isPlatformServer(this.platformId)) {
      console.log('Server');
    }

  }

}
