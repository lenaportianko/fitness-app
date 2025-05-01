import { inject, Injectable } from "@angular/core";
import { ActivityService } from "../../modules/home/services/activity.service";
import * as ActivityAction from './activity.action';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

@Injectable()
export class ActivityEffect {
    private actions$ = inject(Actions);
    private activityService = inject(ActivityService);

    public loadActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActivityAction.load),
            map(() => 
                ActivityAction.set({data: Object.fromEntries(this.activityService.generateActivities())})
            )
        )
    );
}