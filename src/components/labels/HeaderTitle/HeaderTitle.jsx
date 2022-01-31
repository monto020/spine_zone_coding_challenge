import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import './styles.css';

/**
 * The title in the screen header.
 */
const HeaderTitle = ({ title }) => (
    <Typography className={'HeaderTitle'}>{title}</Typography>
);


HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default HeaderTitle;