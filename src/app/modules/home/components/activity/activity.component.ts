import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartDataset, registerables } from 'chart.js';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivityService } from '../../services/activity.service';
import { ActivityInfo } from '../../../../core/models/activity-info.type';
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

  private chartColorMap: Record<string, string> = {
    Sleep: 'rgb(64, 226, 255)',
    Exercise: 'rgb(45, 255, 45)',
    Calories: 'rgb(255, 127, 15)',
    Steps: 'rgb(255, 27, 73)'
  };

  public config: ChartConfiguration<'line', number[], string> = {
    type: 'line',
    data: {
      labels: [],
      datasets: []
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: false
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Percentage'
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    },
  };

  public chart: Chart<'line', number[], string> | null = null;

  constructor(private activityService: ActivityService) {}

  public ngOnInit(): void {
    this.activityService.getActivities().subscribe((activities: Record<string, ActivityInfo[]>) => {
      this.activityData = activities[new Date().toLocaleDateString()];
      this.setChartConfig(activities);
    });

    Chart.register(...registerables);
    this.chart = new Chart('activity-chart', this.config);
  }

  public getActivityClass(activityType: ActivityType): string {
    return ActivityType[activityType].toLowerCase();
  }

  public getProgressSpinnerValue(value: ActivityInfo): number {
    return value.actualValue * 100 / value.goalValue;
  }

  private setChartConfig(data: Record<string, ActivityInfo[]>): void {
    this.config.data.labels = Object.keys(data);
    const chartData: ChartDataset<'line', number[]>[] = [];

    Object.values(ActivityType).forEach((value: string | ActivityType) => {
      if (typeof value === 'number') { return; }

      const borderColor: string = this.chartColorMap[value];
      const backgroundColor: string = borderColor.replace('rgb', 'rgba').replace(')', ', 0.15)');

      const activityValues: number[] = Object.values(data).map((activities: ActivityInfo[]) => {
        const activity = activities.find(a => ActivityType[a.activityType] === value)!;
        const activityValue = activity.actualValue * 100 / activity.goalValue
        return activityValue > 100 ? 100 : activityValue;
      });

      chartData.push(
        {
          label: value,
          data: activityValues,
          borderColor,
          backgroundColor,
          fill: 'start',
          tension: 0.4
        }
      );
    });

    this.config.data.datasets = chartData;
  }

}
