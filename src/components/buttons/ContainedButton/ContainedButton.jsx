import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import './styles.css';

/**
 * Button for exiting the questionare. 
 */
const ContainedButton = ({ title, isDisabled, onClick }) => (
    <Button
        variant="contained"
        disableElevation
        disabled={isDisabled}
        onClick={onClick}
        className={'ContainedButton'}>
        {title}
    </Button>
);

ContainedButton.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ContainedButton;