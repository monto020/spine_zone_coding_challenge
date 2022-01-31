import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import './styles.css';

/**
 * Button for exiting the questionare. 
 */
const ExitButton = ({ onClick }) => (
    <IconButton
        sx={{ color: 'white'}}
        onClick={onClick}
    >
        <CloseIcon />
    </IconButton >
);

ExitButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ExitButton;