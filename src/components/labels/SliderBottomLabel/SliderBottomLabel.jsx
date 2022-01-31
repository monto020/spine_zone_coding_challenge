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
            < ArrowBackIcon fontSize='xs' sx={{ alignSelf: 'center', marginRight: '5px' }} />
            < Typography
                classes={{ root: 'SliderBottomLabel' }}>
                {'Move the slider right or left'}
            </Typography >
            <ArrowForwardIcon fontSize='xs' sx={{ alignSelf: 'center', marginLeft: '5px' }} />
        </>
    );
};

export default SliderBottomLabel;