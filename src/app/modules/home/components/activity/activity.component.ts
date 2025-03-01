import { Component } from '@angular/core';
import { InfoPanelComponent } from "../../../../shared/components/info-panel/info-panel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
  imports: [
    CommonModule,
    InfoPanelComponent
  ]
})
export class ActivityComponent {

}
