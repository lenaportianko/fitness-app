import { ActivityInfo } from "../models/activity-info.type";
import { ActivityType } from "../models/activity-type.enum";

export const activityInfo: ActivityInfo[] = [
    {
        activityType: ActivityType.Sleep,
        actualValue: 0,
        goalValue: 8,
        maxValue: 10,
        unitOfMeasure: 'h'
    },
    {
        activityType: ActivityType.Exercise,
        actualValue: 0,
        goalValue: 60,
        maxValue: 120,
        unitOfMeasure: 'min'
    },
    {
        activityType: ActivityType.Calories,
        actualValue: 0,
        goalValue: 3000,
        unitOfMeasure: 'kcal'
    },
    {
        activityType: ActivityType.Steps,
        actualValue: 0,
        goalValue: 6000,
        maxValue: 30000,
        unitOfMeasure: 'steps'
    }
]