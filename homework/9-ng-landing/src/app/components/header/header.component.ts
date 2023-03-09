import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navMenu = [
    { name: 'CONTACT', href: '#' },
    { name: 'TESTIMONIALS', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'TERMS', href: '#' },
  ];
}
