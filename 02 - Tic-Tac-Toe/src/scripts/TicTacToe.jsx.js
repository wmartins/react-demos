'use strict';

var React      = require('react'),
    TILE_CLEAR = '-',
    TILE_X     = 'X',
    TILE_O     = 'O';

module.exports = React.createClass({

    getInitialState: function() {
        var board = [], i, j;

        for(i = 0; i < 3; i += 1) {
            board[i] = [];
            for(j = 0; j < 3; j += 1) {
                board[i][j] = TILE_CLEAR;
            }
        }

        return {
            board  : board,
            turn   : TILE_X,
            winner : false,
            draw   : false
        };
    },

    getNextTurn: function() {
        if(this.state.turn === TILE_X) {
            return TILE_O;
        }

        return TILE_X;
    },

    putPiece: function(i, j, e) {
        var board;

        if(this.state.board[i][j] === TILE_CLEAR && !this.state.winner) {
            board = this.state.board;

            board[i][j] = this.state.turn;

            this.setState({
                board : board,
                turn  : this.getNextTurn()
            });

            this.checkWinner(this.state.turn, i, j);
        }
    },

    playAgain: function() {
        this.setState(this.getInitialState());
    },

    getStatus: function() {
        return (
            <div className="Status">{
                this.state.winner ?
                    this.state.winner + ' Wins' :
                    (this.state.draw ? 'Draw' : this.state.turn + ' Turn')
            }{this.getPlayAgain()}</div>
        );
    },

    getPlayAgain: function() {
        if(this.state.winner || this.state.draw) {
            return (
                <span
                    className="PlayAgain"
                    onClick={this.playAgain}>Play again?</span>
            );
        }

        return null;
    },

    checkWinner: function(turn, x, y) {
        var isWinner    = false,
            piecesCount = 0,
            i, j;

        for(i = 0; i < 3; i += 1) {
            if(this.state.board[x][i] != turn) {
                break;
            }

            if(i == 2) {
                isWinner = true;
            }
        }

        for(i = 0; i < 3; i += 1) {
            if(this.state.board[i][y] != turn) {
                break;
            }

            if(i == 2) {
                isWinner = true;
            }
        }

        if(x === y) {
            for(i = 0; i < 3; i += 1) {
                if(this.state.board[i][i] != turn) {
                    break;
                }

                if(i == 2) {
                    isWinner = true;
                }
            }
        }

        for(i = 0; i < 3; i += 1) {
            if(this.state.board[i][2 - i] != turn) {
                break;
            }

            if(i == 2) {
                isWinner = true;
            }
        }

        if(isWinner) {
            this.setState({
                winner: turn
            });
        } else {
            for(i = 0; i < 3; i += 1) {
                for(j = 0; j < 3; j += 1) {
                    if(this.state.board[i][j] !== TILE_CLEAR) {
                        piecesCount += 1;
                    }
                }
            }

            if(piecesCount === 9) {
                this.setState({
                    draw: true
                });
            }
        }
    },

    render: function() {
        var i, j;

        return (
            <div>
                {this.getStatus()}
                <table>{
                    this.state.board.map(function(line, i) {
                        return (
                            <tr key={i}>{
                                line.map(function(column, j) {
                                    return (
                                        <td
                                            onClick={this.putPiece.bind(this, i, j)}
                                            key={i + "" + j}>
                                            {column}
                                        </td>
                                    );
                                }.bind(this))
                            }</tr>
                        );
                    }.bind(this))
                }</table>
            </div>
        );
    }
});
