import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ScreenHeader from '../../grids/ScreenHeader';
import ScreenBody from '../../grids/ScreenBody';
import ScreenFooter from '../../grids/ScreenFooter';
import './styles.css';

/**
 * Screen for having user input pain level through a slider. 
 */
const PainSliderScreen = () => (
    <Grid
        className={'SliderGrid'}
        justifyContent='center'
        container
    >
        <ScreenHeader title={'Coding Challenge'} />
        <ScreenBody />
        <ScreenFooter />
    </Grid >
);

export default PainSliderScreen;