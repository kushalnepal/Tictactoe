# Tic Tac Toe Game

## Games → 9 boxes

| 0 | 1 | 2 |
| --- | --- | --- |
| 3 | 4 | 5 |
| 6 | 7 | 8 |

## ( X , O ) → Symbols

> **`Player 1        Player 2`**

### `( X , O )       ( X , O )`

- If player 1 chooses “X”, then by default player 2 will have “O”, and vice versa.
- If player 2 chooses “X”, then by default player 1 will have “O”, and vice versa.

## Winning Orientation

> Horizontal

> Vertical

> Diagonal

| 0 | 1 | 2 |
| --- | --- | --- |
| 3 | 4 | 5 |
| 6 | 7 | 8 |

## Winning pattern

### { (0,1,2) , (3,4,5) , (6,7,8) , (0,3,6) , (1,4,7) , (2,5,8) , (0,4,8) , (2,4,6) }

### Total 8 patterns

Tic Tac Toe is traditionally played on a board with nine spaces, arranged in a 3x3 grid. The positions on the board are represented as:

| 0 | 1 | 2 |
| --- | --- | --- |
| 3 | 4 | 5 |
| 6 | 7 | 8 |

Each player chooses a symbol, either 'X' or 'O'. If player 1 chooses 'X', then by default player 2 will have 'O', and vice versa. The same applies if player 2 chooses 'X' first.

The players take turns placing their chosen symbols in a vacant position on the board. The goal of the game is to align three of their own symbols vertically, horizontally, or diagonally.

The winning patterns are represented as sets of positions on the board:

{ (0,1,2) , (3,4,5) , (6,7,8) , (0,3,6) , (1,4,7) , (2,5,8) , (0,4,8) , (2,4,6) }

There are a total of 8 winning patterns. The game continues until one player forms a winning pattern, or all positions on the board are filled without any winning pattern—in which case, the game is considered a draw.
