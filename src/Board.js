import React, { Component } from "react";
import './Board.css';
import Cell from "./Cell";
import { createBoard } from "./createBoard";

class Board extends Component {

  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: createBoard()
    };
    this.refinedFlipper = this.refinedFlipper.bind(this);
  }

  refinedFlipper(index) {
    let newBoard = this.state.board;
    let x = newBoard[index].x;
    let y = newBoard[index].y;
    let flipGroup = [
      [x, y],
      [x - 1, y],
      [x, y - 1],
      [x + 1, y],
      [x, y + 1]
    ]
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 25; j++) {
        if (newBoard[j].x === flipGroup[i][0] && newBoard[j].y === flipGroup[i][1]) {
          flip(j);
        }
      }
    }
    function flip(index) {
      if (newBoard[index]) {
        if (newBoard[index].light === 0) {
          newBoard[index].light = 1;
        }
        else {
          newBoard[index].light = 0;
        }
      }
    }
    this.setState({
      board: newBoard
    })
  }

  render() {
    return (
      <div className="div-main">
        <h2 className="shine-text">LIGHTS OUT GAME</h2>
        <div className="div-col">
          <div className="div-row">
            <Cell key={0} light={this.state.board[0].light} onClick={() => this.refinedFlipper(0)} />
            <Cell key={1} light={this.state.board[1].light} onClick={() => this.refinedFlipper(1)} />
            <Cell key={2} light={this.state.board[2].light} onClick={() => this.refinedFlipper(2)} />
            <Cell key={3} light={this.state.board[3].light} onClick={() => this.refinedFlipper(3)} />
            <Cell key={4} light={this.state.board[4].light} onClick={() => this.refinedFlipper(4)} />
          </div>
          <div className="div-row">
            <Cell key={5} light={this.state.board[5].light} onClick={() => this.refinedFlipper(5)} />
            <Cell key={6} light={this.state.board[6].light} onClick={() => this.refinedFlipper(6)} />
            <Cell key={7} light={this.state.board[7].light} onClick={() => this.refinedFlipper(7)} />
            <Cell key={8} light={this.state.board[8].light} onClick={() => this.refinedFlipper(8)} />
            <Cell key={9} light={this.state.board[9].light} onClick={() => this.refinedFlipper(9)} />
          </div>
          <div className="div-row">
            <Cell key={10} light={this.state.board[10].light} onClick={() => this.refinedFlipper(10)} />
            <Cell key={11} light={this.state.board[11].light} onClick={() => this.refinedFlipper(11)} />
            <Cell key={12} light={this.state.board[12].light} onClick={() => this.refinedFlipper(12)} />
            <Cell key={13} light={this.state.board[13].light} onClick={() => this.refinedFlipper(13)} />
            <Cell key={14} light={this.state.board[14].light} onClick={() => this.refinedFlipper(14)} />
          </div>
          <div className="div-row">
            <Cell key={15} light={this.state.board[15].light} onClick={() => this.refinedFlipper(15)} />
            <Cell key={16} light={this.state.board[16].light} onClick={() => this.refinedFlipper(16)} />
            <Cell key={17} light={this.state.board[17].light} onClick={() => this.refinedFlipper(17)} />
            <Cell key={18} light={this.state.board[18].light} onClick={() => this.refinedFlipper(18)} />
            <Cell key={19} light={this.state.board[19].light} onClick={() => this.refinedFlipper(19)} />
          </div>
          <div className="div-row">
            <Cell key={20} light={this.state.board[20].light} onClick={() => this.refinedFlipper(20)} />
            <Cell key={21} light={this.state.board[21].light} onClick={() => this.refinedFlipper(21)} />
            <Cell key={22} light={this.state.board[22].light} onClick={() => this.refinedFlipper(22)} />
            <Cell key={23} light={this.state.board[23].light} onClick={() => this.refinedFlipper(23)} />
            <Cell key={24} light={this.state.board[24].light} onClick={() => this.refinedFlipper(24)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;