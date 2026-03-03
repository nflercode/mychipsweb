import type Player from './player';

export interface Auth {
  token: string;
}

export interface PokerTable {
  invitationId: string;
  smallBlind: number | null;
  maxPlayers: number;
}

export type GameState = 'waiting_for_players' | 'in_progress' | 'finished' | string;

export interface Game {
  state: GameState;
  players: Player[];
}

export interface PokerDataResponse {
  auth: Auth;
  pokerTable: PokerTable;
  game: Game;
}
