import React from 'react';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './styles.css';

/**
 * The label for the bottom of the slider
 */
const SliderBottomLabel = () => {

    return (
        <>
            <ArrowBackIcon className='ArrowIcon' />
            <Typography className='SliderBottomLabel'>
                {'Move the slider right or left'}
            </Typography >
            <ArrowForwardIcon className='ArrowIcon' />
        </>
    );
};

export default SliderBottomLabel;