import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  page: string = 'www.mysafelink.com';
  year:number = new Date().getFullYear();
}
