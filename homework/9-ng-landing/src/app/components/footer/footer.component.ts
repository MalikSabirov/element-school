import { Component } from '@angular/core';
import { FooterMenu } from 'src/app/models/interfaces/FooterMenu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerMenu: FooterMenu[] = [
    {
      title: 'Product',
      menuList: [
        { name: 'Overview', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Releases', href: '#' },
      ],
    },
    {
      title: 'Company',
      menuList: [
        { name: 'About', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Partners', href: '#' },
      ],
    },
    {
      title: 'Support',
      menuList: [
        { name: 'Help Center', href: '#' },
        { name: 'Terms of service', href: '#' },
        { name: 'Legal', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Status', href: '#' },
      ],
    },
  ];
}
