import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { InfoPanelComponent } from '../../shared/components/info-panel/info-panel.component';
import { ActivityComponent } from './components/activity/activity.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../core/models/menu-item.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    HeaderComponent,
    ActivityComponent,
    NutritionComponent,
    InfoPanelComponent
  ]
})
export class HomeComponent {

  public menuItem: typeof MenuItem = MenuItem;
  public activeRoute: string = MenuItem.Activity;

  public constructor() {}

  public updateContent($event: string): void {
    this.activeRoute = $event;
  }
}
