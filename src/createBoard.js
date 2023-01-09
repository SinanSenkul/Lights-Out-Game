function createBoard() {
    let board = new Array(25);
    let index = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let val = Math.round(Math.random() * 1);
            let data = {
                x: i,
                y: j,
                light: val
            }
            board[index] = data;
            index++;
        }
    }
    return board;
}

export { createBoard }
