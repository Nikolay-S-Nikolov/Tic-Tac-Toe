export default function getBestMove(board, aiSymbol = 'O', humanSymbol = 'X') {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const sides = [1, 3, 5, 7];

    const aiMoves = board
        .map((v, i) => v === aiSymbol ? i : null)
        .filter(i => i !== null);

    // 0. Първи ход вземи център ако е свободен
    if (aiMoves.length === 0 && board[4] === null) {
        return 4;
    }

    // 1. Опитай да спечелиш
    for (const [a, b, c] of winCombinations) {
        const line = [board[a], board[b], board[c]];
        if (line.filter(v => v === aiSymbol).length === 2 && line.includes(null)) {
            return [a, b, c][line.indexOf(null)];
        }
    }

    // 2. Блокирай противника
    for (const [a, b, c] of winCombinations) {
        const line = [board[a], board[b], board[c]];
        if (line.filter(v => v === humanSymbol).length === 2 && line.includes(null)) {
            return [a, b, c][line.indexOf(null)];
        }
    }

    if (aiMoves.length === 1) {
        const availableSides = sides.filter(i => board[i] === null);
        if (availableSides.length > 0) {
            return availableSides[Math.floor(Math.random() * availableSides.length)];
        }
    }

    // 3. Вземи ъгъл
    const corners = [0, 2, 6, 8];
    for (const i of corners) {
        if (board[i] === null) return i;
    }

    // 4. Вземи центъра
    if (board[4] === null) return 4;



    // 5. Произволен свободен
    const empty = board.map((v, i) => v === null ? i : null).filter(i => i !== null);
    return empty.length > 0 ? empty[Math.floor(Math.random() * empty.length)] : null;
}