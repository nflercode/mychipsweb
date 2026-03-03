export default interface Player {
    id: number;
    alias: string;
    chips: number;
    bet: number;
    hand: string;
    handRank: number;
    handDescription: string;
    folded: boolean;
    allIn: boolean;
    winner: boolean;
    turn: boolean;
    dealer: boolean;
    smallBlind: boolean;
    bigBlind: boolean;
    tableId: number;
}