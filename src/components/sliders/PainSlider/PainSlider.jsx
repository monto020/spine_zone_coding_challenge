import React from 'react';
import Slider from '@mui/material/Slider';

import { painValue$ } from '../../../observables/PainSliderObservables';
import { withStyles } from "@material-ui/core/styles";
import './styles.css'

//Overriding theme 
const CustomSlider = withStyles({
  root: {
    height: '10px',

    // eslint-disable-next-line no-useless-computed-key
    ['@media (max-width:768px)']: {
      height: '8px'
    }
  },
  rail: {
    backgroundImage: "linear-gradient(to right, #68C358CC, #FFAB00CC, #FF446CCC)",
    opacity: 1.0
  },

  track: {
    borderWidth: 0, // A border exists by default, so set width to 0.
    backgroundColor: 'transparent'
  },

  thumb: {
    backgroundColor: 'white',
    height: '40px',
    width: '40px',

    '&:active': {
      backgroundColor: '#469DE3'
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

  return (
    <div className='SliderContainer'>
      <CustomSlider
        className='slider'
        defaultValue={0}
        step={1}
        min={0}
        max={10}
        onChange={(event, value) => {
          painValue$.next(value);
        }}
      />
    </div>
  );
};


export default PainSlider;