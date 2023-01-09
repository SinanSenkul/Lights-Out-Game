import React, { Component } from 'react'
import "./Cell.css"

class Cell extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div key={this.props.key} onClick={this.props.onClick} className={this.props.light === 0 ? "dark-cell" : "lit-cell"}>
      </div>
    )
  }
}

Cell.defaultProps = {

}

export default Cell
