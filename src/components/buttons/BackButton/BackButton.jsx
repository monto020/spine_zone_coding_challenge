import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

/**
 * Button for exiting the questionare. 
 */
const BackButton = ({ onClick }) => (
    <IconButton
        onClick={onClick}
    >
        <CloseIcon />
    </IconButton>
);

BackButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default BackButton;