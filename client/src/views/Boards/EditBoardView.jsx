import React, { Component } from 'react';
import BoardCreationForm from '../../components/BoardCreationForm';

import { editBoard, loadBoard, deleteBoard } from './../../services/board';

class EditBoardView extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      model: '',
      picture: '',
      size: '',
      level: 'All levels',
      price: ''
    };
  }
  componentDidMount() {
    loadBoard(this.props.match.params.id)
      .then(data => {
        const board = data.board;
        this.setState({
          loaded: true,
          name: board.name,
          description: board.description,
          model: board.model,
          picture: board.picture,
          size: board.size,
          level: board.level,
          price: board.price
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleBoardEdit = () => {
    const id = this.props.match.params.id;
    const name = this.state.name;
    const description = this.state.description;
    const model = this.state.model;
    const picture = this.state.picture;
    const size = this.state.size;
    const level = this.state.level;
    const price = this.state.price;
    const body = { name, description, model, picture, size, level, price };

    editBoard(id, body)
      .then(data => {
        this.props.history.push(`/board/${id}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleBoardDelete = event => {
    event.preventDefault();
    const id = this.props.match.params.id;

    deleteBoard(id)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleBoardNameChange = name => {
    this.setState({
      name
    });
  };

  handleBoardDescriptionChange = description => {
    this.setState({
      description
    });
  };

  handleBoardModelChange = model => {
    this.setState({
      model
    });
  };

  handleBoardSizeChange = size => {
    this.setState({
      size
    });
  };

  handleBoardLevelChange = level => {
    this.setState({
      level
    });
  };

  handleBoardPriceChange = price => {
    this.setState({
      price
    });
  };

  handlePictureChange = picture => {
    this.setState({
      picture
    });
  };

  render() {
    return (
      <div>
        <h1>Edit Board</h1>
        <BoardCreationForm
          name={this.state.name}
          description={this.state.description}
          model={this.state.model}
          picture={this.state.picture}
          size={this.state.size}
          level={this.state.level}
          price={this.state.price}
          onNameChange={this.handleBoardNameChange}
          onDescriptionChange={this.handleBoardDescriptionChange}
          onModelChange={this.handleBoardModelChange}
          onPictureChange={this.handlePictureChange}
          onSizeChange={this.handleBoardSizeChange}
          onLevelChange={this.handleBoardLevelChange}
          onPriceChange={this.handleBoardPriceChange}
          onFormSubmission={this.handleBoardEdit}
        />
        <form onSubmit={this.handleBoardDelete}>
          <button>Detele Board</button>
        </form>
      </div>
    );
  }
}

export default EditBoardView;
