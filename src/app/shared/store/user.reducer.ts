import { createReducer, on } from "@ngrx/store";
import { user } from "../../core/constants/user";
import { reset, set } from "./user.action";
import { User } from "../../core/models/user.model";

export const initialState: User = user;

export const userReducer = createReducer(
    initialState,
    on(set, (state, { data }) => state = data),
    on(reset, (state) => state = user)
);