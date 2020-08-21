import React, { Component } from 'react';

class AddBoardView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //   handleBoardCreation = () => {};

  //   handleBoardDetailsChange = () => {};

  //   handlePhotoChange = photo => {
  //     this.setState({
  //       photo
  //     });
  //   };

  render() {
    return (
      <div>
        <h1>BOARD CREATION VIEW</h1>
        <BoardCreationForm />
      </div>
    );
  }
}

export default AddBoardView;
