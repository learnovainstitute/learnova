import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 40) {
      document.getElementsByTagName('header')[0].style.padding = '0 5%'
      document.getElementsByTagName('header')[0].style.backgroundColor = '#ffff'
      document.getElementsByTagName('header')[0].style.boxShadow = '0px 3px 6px rgba(138, 138, 138, 0.63)'
    } else if (number < 40) {
      document.getElementsByTagName('header')[0].style.padding = '1.5% 5%'
      document.getElementsByTagName('header')[0].style.boxShadow = 'none'
      document.getElementsByTagName('header')[0].style.backgroundColor = 'rgba(0,0,0,0)'
    }

  }
}
