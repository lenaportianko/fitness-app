import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { InfoPanelComponent } from '../../shared/components/info-panel/info-panel.component';
import { ActivityComponent } from './components/activity/activity.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../core/models/menu-item.enum';
import * as ActivityAction from '../../shared/store/activity.action';
import { Store } from '@ngrx/store';

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
export class HomeComponent implements OnInit {

  public menuItem: typeof MenuItem = MenuItem;
  public activeRoute: string = MenuItem.Activity;

  public constructor(
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(ActivityAction.load());
  }

  public updateContent($event: string): void {
    this.activeRoute = $event;
  }
}
