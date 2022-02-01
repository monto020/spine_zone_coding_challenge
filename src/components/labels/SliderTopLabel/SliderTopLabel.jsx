import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import './styles.css';

// The pain level value & description for the top slider labels
const labels = [
    {
        painLevel: 'No Pain',
        value: 0
    },
    {
        painLevel: '',
        value: 1
    },
    {
        painLevel: 'Mild',
        value: 2
    },
    {
        painLevel: '',
        value: 3
    },
    {
        painLevel: 'Moderate',
        value: 4
    },
    {
        painLevel: '',
        value: 5
    },
    {
        painLevel: 'Severe',
        value: 6
    },
    {
        painLevel: '',
        value: 7
    },
    {
        painLevel: 'Very Severe',
        value: 8
    },
    {
        painLevel: '',
        value: 9
    },
    {
        painLevel: 'Extreme',
        value: 10
    }
];

/**
 * The labels that go above the slider, includes pain level values and descriptions.
 */
const SliderTopLabel = () => {

    return (
        <List className='SliderTopLabelNumbersList'>
            {
                labels.map((item, index) =>
                    <div key={index} className='ListItemContainer'>
                        <ListItem classes={{ root: 'ListItemTextContainer' }}>
                            <ListItemText
                                primary={
                                    <Typography noWrap className='PainLevelText'>
                                        {item.painLevel}
                                    </Typography>
                                }
                                secondary={
                                    <Typography component={'div'} className='PainValueText'>
                                        {item.value}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            classes={{ root: 'ListItemDividerContainer' }}>
                            <Divider className='DividerContainer' orientation={'vertical'} />
                        </ListItem>
                    </div>
                )
            }
        </List >
    );
};

export default SliderTopLabel;