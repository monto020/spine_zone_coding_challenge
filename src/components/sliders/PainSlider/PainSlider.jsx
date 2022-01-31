import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

import { isPainSliderValueSelected$ } from '../../../observables/PainSliderObservables';
import { withStyles } from "@material-ui/core/styles";
import './styles.css'

//Overriding theme 
const CustomSlider = withStyles({
  root: {
    height: 10
  },
  rail: {
    backgroundImage: "linear-gradient(.25turn, #68C358, #FFAB00, #FF446C)"
  },

  track: {
    borderWidth: 0, // A border exists by default, so set width to 0.
    backgroundColor: 'transparent',
  },

  thumb: {
    backgroundColor: 'white',
    height: '40px',
    width: '40px',

    '&:active': {
      backgroundColor: '#3795e1',
    },

    // eslint-disable-next-line no-useless-computed-key
    ['@media (max-width:768px)']: {
      height: '32px',
      width: '32px'
    }
  }
})(Slider);


/**
 * The slider for the customer to input the level of pain
 */
const PainSlider = () => {
  //TODO define functionality for sliderValue. It's currently set, 
  //but didn't see anywhere to display it in the FIGMA design.
  const [sliderValue, setSliderValue] = useState();

  return (
    <div style={{
      display: 'flex',
      alignSelf: 'center',
      width: '95%',
    }}>
      <CustomSlider
        className='slider'
        defaultValue={0}
        step={1}
        min={0}
        max={10}
        aria-label="Always visible"
        onChange={(value) => {
          setSliderValue(value);
          isPainSliderValueSelected$.next(true);
        }}
      />
    </div>
  );
};


export default PainSlider;