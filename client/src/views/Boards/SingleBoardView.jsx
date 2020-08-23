import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { loadBoard } from './../../services/board';
import BoardCard from './../../components/BoardCard';

class SingleBoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      board: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    loadBoard(id)
      .then(data => {
        const board = data.board;
        this.setState({
          board,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const board = this.state.board;
    return (
      <>
        <div>
          <BoardCard />
        </div>
      </>
    );
  }
}
export default SingleBoardView;
