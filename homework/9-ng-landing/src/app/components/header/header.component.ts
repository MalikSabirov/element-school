import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/interfaces/MenuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navMenu: MenuItem[] = [
    { name: 'CONTACT', href: '#' },
    { name: 'TESTIMONIALS', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'TERMS', href: '#' },
  ];
}
