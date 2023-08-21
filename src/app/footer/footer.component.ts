import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  site: string = 'Universidad de Cundinamarca';
  year:number = new Date().getFullYear();
}
