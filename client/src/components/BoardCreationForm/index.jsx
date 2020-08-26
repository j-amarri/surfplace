import React from 'react';
import './style.scss';
import Map from '../Map';

const BoardCreationForm = props => {
  const handleFormSubmission = event => {
    event.preventDefault();
    props.onFormSubmission();
  };

  const handleNameInputChange = event => {
    event.preventDefault();
    const name = event.target.value;

    props.onNameChange(name);
  };

  const handleDescriptionInputChange = event => {
    event.preventDefault();
    const description = event.target.value;
    props.onDescriptionChange(description);
  };

  const handleModelInputChange = event => {
    event.preventDefault();
    const model = event.target.value;
    props.onModelChange(model);
  };

  const handlePictureInputChange = event => {
    event.preventDefault();
    const file = event.target.files[0];
    props.onPictureChange(file);
  };

  const handleSizeInputChange = event => {
    event.preventDefault();
    const size = Number(event.target.value);
    props.onSizeChange(size);
  };

  const handleLevelInputChange = event => {
    event.preventDefault();
    const level = event.target.value;
    props.onLevelChange(level);
  };

  const handlePriceInputChange = event => {
    event.preventDefault();
    const price = Number(event.target.value);
    props.onPriceChange(price);
  };

  const getUserLocation = location => {
    props.onLocationChange(location);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <label htmlFor="input-name">Name</label>
      <input
        type="text"
        name="name"
        value={props.name}
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
      <select
        name="model"
        onChange={handleModelInputChange}
        value={props.model}
        required
      >
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
        type="number"
        name="size"
        onChange={handleSizeInputChange}
        value={props.size}
        required
      />

      <label htmlFor="input-level">Skill Level</label>
      <select
        name="level"
        onChange={handleLevelInputChange}
        value={props.level}
      >
        <option value="All levels">All levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <label htmlFor="input-price">Price</label>
      <input
        type="number"
        name="price"
        //value={props.price.amount}
        onChange={handlePriceInputChange}
        required
      />

      <label htmlFor="input-location">Where is the board located?</label>
      <input type="text" name="latitude" />
      <input type="text" name="longitutde" />
      <div className="map">
        <Map getUserLocation={getUserLocation} />
      </div>

      <label htmlFor="input-picture">Picture</label>
      <input
        id="input-picture"
        type="file"
        name="picture"
        //value={props.picture}
        onChange={handlePictureInputChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default BoardCreationForm;
