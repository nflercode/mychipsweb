
import { createReducer } from "@reduxjs/toolkit";
import { PLAYER_LEFT_TABLE } from "./table-reducer";
import Action  from '../types/action';
interface CreateAuthTokenAction {
    type: typeof CREATE_AUTH_TOKEN;
    authToken: string;
}

interface CreateRefreshTokenAction {
    type: typeof CREATE_REFRESH_TOKEN;
    refreshToken: string;
}

type AuthAction = CreateAuthTokenAction | CreateRefreshTokenAction;


export const CREATE_AUTH_TOKEN = "CREATE_AUTH_TOKEN";
export const CREATE_REFRESH_TOKEN = "CREATE_REFRESH_TOKEN";

export const auth = createReducer({}, (builder) => {
    builder
        .addCase(CREATE_AUTH_TOKEN, (state, action: Action) => {
            return { ...state, authToken: action.authToken };
        })
        .addCase(CREATE_REFRESH_TOKEN, (state, action: Action) => {
            return { ...state, refreshToken: action.refreshToken };
        })
        .addCase(PLAYER_LEFT_TABLE, (state, action: Action) => {
            return { authToken: {}, refreshToken: {} };
        });
});
