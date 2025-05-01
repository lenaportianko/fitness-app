import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivityService } from '../../services/activity.service';
import { ActivityInfo } from '../../../../core/models/activity-info.model';
import { ActivityType } from '../../../../core/models/activity-type.enum';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class ActivityComponent implements OnInit {

  public activityData: ActivityInfo[] = [];
  public activityTypes = ActivityType;

  constructor(private activityService: ActivityService) {}

  public ngOnInit(): void {
    this.activityService.getActivities().subscribe((activities: Record<string, ActivityInfo[]>) => {
      this.activityData = activities[new Date().toLocaleDateString()];
    });
  }

  public getActivityClass(activityType: ActivityType): string {
    return ActivityType[activityType].toLowerCase();
  }

  public getProgressSpinnerValue(value: ActivityInfo): number {
    return value.actualValue * 100 / value.goalValue;
  }

}
