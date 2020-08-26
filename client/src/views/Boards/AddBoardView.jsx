import React, { Component } from 'react';
import BoardCreationForm from '../../components/BoardCreationForm';

import { addBoard } from './../../services/board';

class AddBoardView extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      model: '',
      picture: '/board-placeholder.jpg',
      size: '',
      level: 'All levels',
      price: '',
      latitude: '',
      longitude: ''
    };
  }

  handleBoardCreation = () => {
    const name = this.state.name;
    const description = this.state.description;
    const model = this.state.model;
    const picture = this.state.picture;
    const size = this.state.size;
    const level = this.state.level;
    const price = this.state.price;
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;

    const body = {
      name,
      description,
      model,
      picture,
      size,
      level,
      price,
      latitude,
      longitude
    };

    addBoard(body)
      .then(data => {
        //const board = data.board;
        //const id = board._id;
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

  onLocationChange = location => {
    console.log(location);

    if (this.state.latitude !== location.lat) {
      this.setState({
        latitude: location.lat,
        longitude: location.lng
      });
    }
  };

  render() {
    return (
      <div>
        <h1>BOARD CREATION VIEW</h1>
        <BoardCreationForm
          name={this.state.name}
          description={this.state.description}
          model={this.state.model}
          picture={this.state.picture}
          size={this.state.size}
          level={this.state.level}
          //price={this.state.price.amount}
          onNameChange={this.handleBoardNameChange}
          onDescriptionChange={this.handleBoardDescriptionChange}
          onModelChange={this.handleBoardModelChange}
          onPictureChange={this.handlePictureChange}
          onSizeChange={this.handleBoardSizeChange}
          onLevelChange={this.handleBoardLevelChange}
          onPriceChange={this.handleBoardPriceChange}
          onLocationChange={this.onLocationChange}
          onFormSubmission={this.handleBoardCreation}
        />
      </div>
    );
  }
}

export default AddBoardView;
