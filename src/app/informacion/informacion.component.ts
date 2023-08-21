import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

  openTab(e: Event, tabName:string){
    e.preventDefault();
   
    let i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {

    const tab = x[i] as HTMLElement;
        tab.style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }

  const tab = document.getElementById(tabName);
  const tabCurrent =  tab as HTMLElement;
  
  tabCurrent.style.display = "block";

  const current = e.currentTarget as HTMLElement;

  const parentLi = current.parentNode as HTMLElement;
  parentLi.classList.add('is-active');
 
  }
}
