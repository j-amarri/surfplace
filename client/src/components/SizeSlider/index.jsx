import React from 'react';

class SizeSlider extends React.Component {
  render() {
    return (
      <div className="pricing">
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>Size slider</span>
            <input type="range" />
          </label>
          <div className="pricing-slider-value">
            {/* Current slider value */}
          </div>
        </div>
      </div>
    );
  }
}

export default SizeSlider;
