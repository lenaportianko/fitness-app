import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class ActivityComponent {

  public activityInfoes = [
    {
      activityType: 'Sleep',
      activityActual: this.getRandomValue(0, 10),
      activityGoal: 8,
      unitOfMeasure: 'h',
      date: new Date()
    },
    {
      activityType: 'Exercise',
      activityActual: this.getRandomValue(0, 120),
      activityGoal: 60,
      unitOfMeasure: 'min',
      date: new Date()
    },
    {
      activityType: 'Calories',
      activityActual: this.getRandomValue(0, 3000),
      activityGoal: 3000,
      unitOfMeasure: 'kcal',
      date: new Date()
    },
    {
      activityType: 'Steps',
      activityActual: this.getRandomValue(0, 30000),
      activityGoal: 6000,
      unitOfMeasure: 'steps',
      date: new Date()
    }
  ];

  private getRandomValue(minValue: number, maxValue: number): number {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  public getActivityClass(activityType: string): string {
    return activityType.toLowerCase();
  }

  public getProgressSpinnerValue(value: { activityActual: number; activityGoal: number; }): number {
    return value.activityActual * 100 / value.activityGoal;
  }

}
