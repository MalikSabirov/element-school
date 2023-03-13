import { Component } from '@angular/core';
import { Card } from 'src/app/models/interfaces/Card';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent {
  cards: Card[] = [
    {
      title: 'Enviromental Law',
      description:
        'Environmental legal issues might occur since the planned business activities are designed',
      iconUrl: 'assets/icons/circles.svg',
    },
    {
      title: 'Corporate and Commercial',
      description:
        'We provide a complete range of services for the continuity of your business activities.',
      iconUrl: 'assets/icons/bag.svg',
    },
    {
      title: 'Information and Technology',
      description:
        'IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.',
      iconUrl: 'assets/icons/rocket.svg',
    },
    {
      title: 'Other Services',
      description:
        'In dealing with disruptive economic and legal challenge, our firm also provide various legal services.',
      iconUrl: 'assets/icons/users.svg',
    },
  ];
}
