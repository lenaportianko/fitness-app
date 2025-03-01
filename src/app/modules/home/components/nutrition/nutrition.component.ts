import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPanelComponent } from '../../../../shared/components/info-panel/info-panel.component';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.scss',
  imports: [
    CommonModule,
    InfoPanelComponent
  ]
})
export class NutritionComponent {

}
