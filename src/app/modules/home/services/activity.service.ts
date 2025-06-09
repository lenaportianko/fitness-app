import { Injectable } from "@angular/core";
import { ActivityInfo } from "../../../core/models/activity-info.type";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { reset } from "../../../shared/store/activity.action";
import { activityInfo } from "../../../core/constants/activity-info";
import { getRandomValue } from "../../../shared/utils/helper";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public constructor(private store: Store<{ activity: Record<string, ActivityInfo[]> }>) { }
    
  public getActivities(): Observable<Record<string, ActivityInfo[]>> {
    return this.store.select('activity');
  }

  public generateActivities(): Map<string, ActivityInfo[]> {
    const activities: Map<string, ActivityInfo[]> = new Map();

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      activities.set(
        date.toLocaleDateString(),
        activityInfo.map((activity: ActivityInfo) => ({
          ...activity,
          actualValue: getRandomValue(0, activity.maxValue ?? activity.goalValue)
        }))
      );
    }

    return activities;
  }

  public resetActivities(): void {
    this.store.dispatch(reset());
  }

}