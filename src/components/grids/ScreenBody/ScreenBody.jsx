import React from 'react';
import Grid from '@mui/material/Grid';

import PageQuestionTitle from '../../labels/PageQuestionTitle';
import PainSlider from '../../sliders/PainSlider';
import SliderTopLabel from '../../labels/SliderTopLabel';
import SliderBottomLabel from '../../labels/SliderBottomLabel';
import './styles.css';

/**
 * The body of the pain screen, includes the pain slider and several labels.
 */
const ScreenBody = () => {

    return (
        <Grid item xs={8} className='ChildSliderGrid'>
            <div className='PageQuestionTitle'>
                <PageQuestionTitle
                    title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit? '}
                />
            </div>
            <SliderTopLabel />
            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                <PainSlider />
            </Grid>
            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                <SliderBottomLabel />
            </Grid>
        </Grid >
    );
};

export default ScreenBody;