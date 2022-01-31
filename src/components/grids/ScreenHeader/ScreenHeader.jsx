import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import HeaderTitle from '../../labels/HeaderTitle';
import ExitButton from '../../buttons/ExitButton';
import './styles.css';

/**
 * Header for screens, includes a left title, and an exit button. 
 */
const ScreenHeader = ({ title }) => {

    return (
        <Grid
            className={'gridRowstyle'}
            container
            sx={{ backgroundColor: '#3795e1' }}
            direction='row'
            justifyContent='space-between'
            alignContent='center'
        >
            <HeaderTitle title={title} />
            <ExitButton onClick={() => {
                //TODO Define what behavior this particular instance of the button click must have.
                console.log('Exit Button Pressed');
            }} />
        </Grid >
    );
};

ScreenHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default ScreenHeader;