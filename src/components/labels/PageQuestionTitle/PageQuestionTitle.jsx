import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import './styles.css';

/**
 * The question/description of activity user must perform on a particular screen
 */
const PageQuestionTitle = ({ title }) => (
    <Typography
        className='CustomerQuestionText'
        align="left">
        {title}
    </Typography>


);


PageQuestionTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default PageQuestionTitle;