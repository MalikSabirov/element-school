import { Component } from '@angular/core';
import { Social } from 'src/app/models/interfaces/Social';

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.scss'],
})
export class FooterSocialComponent {
  socials: Social[] = [
    {
      link: 'https://youtube.com',
      icon: 'assets/icons/youtube.svg',
    },
    {
      link: 'https://twitter.com',
      icon: 'assets/icons/twitter.svg',
    },
    {
      link: 'https://dribbble.com',
      icon: 'assets/icons/dribbble.svg',
    },
    {
      link: 'https://instagram.com',
      icon: 'assets/icons/insta.svg',
    },
  ];
}
