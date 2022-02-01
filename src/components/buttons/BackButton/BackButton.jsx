import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import './styles.css';
/**
 * Button for going to the previous screen. 
 */
const BackButton = ({ onClick }) => (
    <Button variant="contained"
        onClick={onClick}
        disableElevation
        className='BackButton'
        startIcon={<ArrowBackIcon />}>
        BACK
    </Button>
);

BackButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default BackButton;