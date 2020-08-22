import React from 'react';
import './style.css';

const BoardCreationForm = props => {
  const handleFormSubmission = event => {
    event.preventDefault();
    props.onFormSubmission();
  };

  const handleNameInputChange = event => {
    const name = event.target.value;
    props.onNameChange(name);
  };

  const handleDescriptionInputChange = event => {
    const description = event.target.value;
    props.onDescriptionChange(description);
  };

  const handleModelInputChange = event => {
    const model = event.target.value;
    props.onModelChange(model);
  };

  // const handlePhotoInputChange = event => {
  //   const file = event.target.files[0];
  //   props.onPhotoChange(file);
  // };

  const handleSizeInputChange = event => {
    const size = event.target.value;
    props.onSizeChange(size);
  };

  const handleLevelInputChange = event => {
    const level = event.target.value;
    props.onLevelChange(level);
  };

  const handlePriceInputChange = event => {
    const price = event.target.value;
    props.onPriceChange(price);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <label htmlFor="input-name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleNameInputChange}
        required
      />

      <label htmlFor="description-input">Board Description</label>
      <textarea
        id="description-input"
        placeholder="Describe the board here.."
        name="description"
        value={props.description}
        onChange={handleDescriptionInputChange}
        required
      />

      <label htmlFor="input-model">Board model</label>
      <select name="model" onChange={handleModelInputChange} required>
        <option value="">Select a model</option>
        <option value="Fish">Fish</option>
        <option value="Shortboard">Shortboard</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Gun">Gun</option>
        <option value="Funboard">Funboard</option>
        <option value="Longboard">Longboard</option>
      </select>

      <label htmlFor="input-size">Board Size</label>
      <input
        type="text"
        name="size"
        onChange={handleSizeInputChange}
        required
      />

      <label htmlFor="input-level">Skill Level</label>
      <select name="level" onChange={handleLevelInputChange}>
        <option value="All levels">All levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <label htmlFor="input-price">Price</label>
      <input
        type="text"
        name="price"
        onChange={handlePriceInputChange}
        required
      />

      {/* <label htmlFor="input-photo">Photo</label>
      <input type="file" name="photo" onChange={handlePhotoInputChange} /> */}

      <button>Add board</button>
    </form>
  );
};

export default BoardCreationForm;
