const board01 = [["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]

function countBoards(boardData) {
    var numBoards = 0

    for (let i = 0; i < board01.length; i++) {
        for (let x = 0; x < board01[i].length; x++) {
           // console.log(board01[i][x])
            if (board01[i][x] != "." ) {
                console.log(board01[i][x])
            }

        }

        // console.log(board01[i])
    }
    //console.log(board01.length)
    //  console.log(boardData)
    // console.log(numBoards)
}

countBoards(board01)