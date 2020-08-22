import React, { Component } from 'react';
import BoardCreationForm from './../../components/BoardCreationForm';

import { addBoard } from './../../services/board';

class AddBoardView extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      model: '',
      size: '',
      level: '',
      price: ''
    };
  }

  handleBoardCreation = () => {
    const name = this.state.name;
    const description = this.state.description;
    // const model = this.state.model;
    // const size = this.state.size;
    // const level = this.state.level;
    // const price = this.state.price;

    const body = { name, description };

    addBoard(body)
      .then(data => {
        //const board = data.board;
        //const id = board._id;
        console.log(data);
        this.props.history.push(`/`);
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

  // handlePhotoChange = photo => {
  //   this.setState({
  //     photo
  //   });
  // };

  render() {
    return (
      <div>
        <h1>BOARD CREATION VIEW</h1>
        <BoardCreationForm
          name={this.state.name}
          description={this.state.description}
          onNameChange={this.handleBoardNameChange}
          onDescriptionChange={this.handleBoardDescriptionChange}
          onFormSubmission={this.handleBoardCreation}
        />
      </div>
    );
  }
}

export default AddBoardView;
