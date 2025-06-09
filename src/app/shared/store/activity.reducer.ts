import { createReducer, on } from "@ngrx/store";
import { ActivityInfo } from "../../core/models/activity-info.type";
import { reset, set } from "./activity.action";

export const initialState: Record<string, ActivityInfo[]> = {};

export const activityReducer = createReducer(
    initialState,
    on(set, (_, { data }) => ({ ...data })),
    on(reset, () => ({}))
);