
export default function gameReducer(state, action) {
    switch (action.type) {
        case 'START_GAME': {
            return {
                ...state,
                startingSetup: action.payload,
                showSetup: false,
                xIsNext: action.payload.starter === 'X',
                history: [Array(9).fill(null)],
                currentMove: 0,
            };
        }

        case 'PLAY': {
            const nextSquare = action.payload;
            const slicedHistory = state.history.slice(0, state.currentMove + 1);
            const newHistory = [...slicedHistory, nextSquare];
            const newCurrentMove = newHistory.length - 1;
            const isXStarter = state.startingSetup.starter === 'X';
            const nextPlayer = newHistory.length === 0
                ? isXStarter 
                : !state.xIsNext;
            return {
                ...state,
                history: newHistory,
                currentMove: newCurrentMove,
                xIsNext: nextPlayer
            };
        }

        case 'JUMP_TO_MOVE': {
            const idx = action.payload;
            const IsXNext = state.startingSetup.starter === 'X'
                ? idx % 2 === 0
                : !(idx % 2 === 0);
            return {
                ...state,
                currentMove: idx,
                xIsNext: IsXNext,
            };
        }

        case 'RESTART': {
            return {
                ...state,
                history: [Array(9).fill(null)],
                currentMove: 0,
                xIsNext: true,
                showSetup: true,
            };
        }

        default:
            return state;

    }
}