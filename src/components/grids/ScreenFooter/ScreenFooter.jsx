import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

import { isPainSliderValueSelected$ } from '../../../observables/PainSliderObservables';
import ContainedButton from '../../buttons/ContainedButton';
import './styles.css';

/**
 * Footer for screens, includes a back and a next button.
 */
const ScreenFooter = () => {
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

    useEffect(() => {
        const isPainValueSelectedSubscription = isPainSliderValueSelected$.subscribe((selected) => {
            setIsNextButtonDisabled(!selected);
        });

        return () => {
            isPainValueSelectedSubscription.unsubscribe();
        };
    }, []);

    return (
        <Grid
            className='gridRowstyle'
            sx={{ alignSelf: 'flex-end' }}
            container
            direction='row'
            justifyContent='space-between'
        >
            <Button variant="contained"
                onClick={() => {
                    //TODO Define what behavior this particular instance of the button click must have.
                    //For now, using back button to set disable button again.
                    isPainSliderValueSelected$.next(false);
                }}
                disableElevation
                sx={[
                    {
                        ':hover': {
                            backgroundColor: 'transparent',
                            color: '#999999'
                        }
                    },
                    {
                        height: 48,
                        backgroundColor: 'transparent',
                        color: 'black',
                        padding: 0
                    }]}
                startIcon={<ArrowBackIcon />}>
                BACK
            </Button>
            <ContainedButton
                title={'NEXT'}
                isDisabled={isNextButtonDisabled}
                onClick={() => {
                    //TODO Define what behavior this particular instance of the button click must have.
                    console.log('Next Button Pressed');
                }}
            />
        </Grid >
    );
};

export default ScreenFooter;