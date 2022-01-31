import React from 'react';
import isEmpty from 'lodash/isEmpty';
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
        value: 1
    },
    {
        painLevel: 'Mild',
        value: 2
    },
    {
        value: 3
    },
    {
        painLevel: 'Moderate',
        value: 4
    },
    {
        value: 5
    },
    {
        painLevel: 'Severe',
        value: 6
    },
    {
        value: 7
    },
    {
        painLevel: 'Very Severe',
        value: 8
    },
    {
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
        <div style={{
            height: '120px',
            width: '100%',
            backgroundColor: 'blue',
            marginTop: '20px',
            marginBottom: '20px'
        }}>
            <List
                className='SliderTopLabelNumbersList'
                style={{
                    display: 'flex',
                    backgroundColor: 'orange'
                }}
            >
                {
                    labels.map((item, index) =>
                        <>
                            <ListItem
                                key={index}
                                style={{
                                    padding: '0px',
                                    alignItems: 'flex-end',
                                    backgroundColor: 'green',
                                }}
                            >
                                <ListItemText
                                    primary={
                                        !isEmpty(item.painLevel) && <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: '10px'
                                            }}
                                            className='PainLevelText'>
                                            {item.painLevel}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography
                                            sx={{
                                                //  alignSelf: 'center',
                                                textAlign: 'center',
                                                padding: 0,
                                                //  backgroundColor: 'red',
                                                fontSize: '10px',
                                            }}>{item.value}</Typography>
                                    }

                                />
                            </ListItem>
                        </>
                    )
                }
            </List>
            <List
                className='SliderTopLabelNumbersList'
                style={{
                    display: 'flex',
                    backgroundColor: 'yellow'
                }}
            >
                {
                    labels.map((item, index) =>

                        <ListItem
                            key={index}
                            style={{
                                padding: '0px',
                                // alignItems: 'space-around',
                                backgroundColor: 'green',
                            }}
                        >
                            <div style={{
                                height: '25px',
                                width: 10,
                                alignSelf: 'center'

                            }}>
                                <Divider orientation={'vertical'} />
                            </div>
                        </ListItem>
                    )
                }
            </List>
        </div >
    );
};

export default SliderTopLabel;