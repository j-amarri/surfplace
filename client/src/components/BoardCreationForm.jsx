import React from 'react';

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

  // const handlePhotoInputChange = event => {
  //   const file = event.target.files[0];
  //   props.onPhotoChange(file);
  // };

  // const handleSizeInputChange = event => {
  //   const size = event.target.value;
  //   props.onSizeChange(size);
  // };

  // const handleLevelInputChange = event => {
  //   const level = event.target.value;
  //   props.onLevelChange(level);
  // };

  // const handlePriceInputChange = event => {
  //   const price = event.target.value;
  //   props.onPriceChange(price);
  // };

  return (
    <form onSubmit={handleFormSubmission}>
      <label htmlFor="input-name">Name</label>
      <input type="text" name="name" onChange={handleNameInputChange} />

      <label htmlFor="name-input">Board Description</label>
      <textarea
        id="description-input"
        placeholder="Describe the board here.."
        name="description"
        value={props.description}
        onChange={handleDescriptionInputChange}
      />

      {/* <label htmlFor="input-size">Board Size</label>
      <input type="text" name="size" onChange={handleSizeInputChange} />

      <label htmlFor="input-level">Skill Level</label>
      <select type="level" name="level" onChange={handleLevelInputChange}>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <label htmlFor="input-price">Price</label>
      <input type="text" name="price" onChange={handlePriceInputChange} /> */}

      {/* <label htmlFor="input-photo">Photo</label>
      <input type="file" name="photo" onChange={handlePhotoInputChange} /> */}

      <button>Add board</button>
    </form>
  );
};

export default BoardCreationForm;
