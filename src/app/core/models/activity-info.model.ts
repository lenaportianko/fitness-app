import { ActivityType } from "./activity-type.enum";

export type ActivityInfo = {
    activityType: ActivityType;
    actualValue: number;
    goalValue: number;
    maxValue?: number;
    unitOfMeasure: string;
};