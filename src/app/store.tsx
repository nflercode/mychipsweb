'use client'

import { createSlice, configureStore } from '@reduxjs/toolkit';
import {auth}  from '../reducers/auth-reducer';
import {betActions} from '../reducers/bet-actions';
import {gameActions} from '../reducers/game-actions-reducer';
import {game} from '../reducers/game-reducer';
import {potRequest} from '../reducers/pot-request';
import {table} from '../reducers/table-reducer';

// Define initial state
const initialState = {
  counter: 0,
};


const store = configureStore({
  reducer: {
 //   auth: auth,
 //   betActions: betActions,
 //   gameActions: gameActions,
 //   game: game,
 //   potRequest: potRequest,
 //   table: table,
  },
});

// Export actions and store
export default store;
