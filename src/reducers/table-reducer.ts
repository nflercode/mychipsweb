import { createReducer } from "@reduxjs/toolkit";

import Action from "../types/action";
import Player from "../types/player";
export const CREATE_TABLE = "CREATE_TABLE";
export const PLAYER_JOINED = "PLAYER_JOINED";
export const TABLE_NAME_CHANGE = "TABLE_NAME_CHANGE";
export const PLAYER_LEFT_TABLE = "PLAYER_LEFT_TABLE";
export const PLAYER_REMOVED = "PLAYER_REMOVED";
export const PLAYER_NAME_CHANGE = "PLAYER_NAME_CHANGE";

export const table = createReducer([], (builder) => {
    builder
        .addCase(CREATE_TABLE, (state: any, action: Action) => {
            return {
                ...state,
                ...action.table
            };
        })
        .addCase(PLAYER_JOINED, (state: any, action: Action) => {
            return {
                ...state,
                players: [...(state.players || []), action.player]
            };
        })
        .addCase(TABLE_NAME_CHANGE, (state: any, action: Action) => {
            return {
                ...state,
                name: action.name
            };
        })
        .addCase(PLAYER_LEFT_TABLE, (state: any): never[] => {
            return [];
        })
        .addCase(PLAYER_NAME_CHANGE, (state: any, action: Action) => {
            return {
                ...state,
                players: (state.players || []).map((player: Player) =>
                    player.id === action.player.id
                        ? { ...player, name: action.player.name }
                        : player
                )
            };
        })
        .addCase(PLAYER_REMOVED, (state: any, action: Action) => {
            return {
                ...state,
                players: (state.players || []).filter(
                    (player: Player) => player.id !== action.playerId
                )
            };
        });
});
