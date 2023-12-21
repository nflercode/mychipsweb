export default interface Table {
    id: number;
    name: string;
    maxPlayers: number;
    pot: number;
    currentBet: number;
    currentTurn: number;
    winner: number;
    winnerHand: string;
    winnerHandRank: number;
    winnerHandDescription: string;
}
