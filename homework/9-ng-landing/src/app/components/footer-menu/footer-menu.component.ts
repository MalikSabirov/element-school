import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/interfaces/MenuItem';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent {
  @Input() title!: string;
  @Input() menuList!: MenuItem[];
}
