import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PainSlider from '../../sliders/PainSlider';
import SliderTopLabel from '../../labels/SliderTopLabel';
import SliderBottomLabel from '../../labels/SliderBottomLabel';
import './styles.css';

/**
 * The body of the pain screen, includes the pain slider and several labels.
 */
const ScreenBody = () => {

    return (
        <Grid item xs={8}
            sx={{ display: 'flex', flexDirection: 'column' }}
            className='ChildSliderGrid'
        >
            <div>
                <Typography
                    sx={{ fontSize: '20px' }}
                    classes={{ root: 'CustomerQuestionText' }}
                    className={'CustomerQuestionText'}
                    align="left">
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit? '}
                </Typography>
            </div>
            <SliderTopLabel />
            <PainSlider />
            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                <SliderBottomLabel />
            </Grid>
        </Grid>
    );
};

export default ScreenBody;