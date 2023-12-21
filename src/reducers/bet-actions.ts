import { createReducer } from "@reduxjs/toolkit";
import { buyIn } from "../actions/bet-actions";
import statusConstants from "../constants/status-constants.js";
import Action from "../types/action";

const { error, loading, fulfilled } = statusConstants;
export const betActions = createReducer({}, (builder) => {
    builder
        .addCase(buyIn.fulfilled, (_, __) => {
            return {
                status: fulfilled
            };
        })
        .addCase(buyIn.pending, (_, __) => {
            return { status: loading };
        })
        .addCase(buyIn.rejected, (_, action: Action) => {
            return {
                status: error,
                error: action.error?.message || 'Unknown error occurred'
            };
        });
});
