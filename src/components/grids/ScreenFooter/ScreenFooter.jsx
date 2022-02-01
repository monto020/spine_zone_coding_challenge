import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { painValue$ } from '../../../observables/PainSliderObservables';
import BackButton from '../../buttons/BackButton';
import ContainedButton from '../../buttons/ContainedButton';
import './styles.css';

/**
 * Footer for screens, includes a back and a next button.
 */
const ScreenFooter = () => {
    const [painValue, setPainValue] = useState(null);

    useEffect(() => {
        const painValueSubscription = painValue$.subscribe((value) => {
            //TODO define what to do with pain value once set. 
            //For now, just display it, to prove slider is working.
            console.log(`value: ${value}`);
            setPainValue(value);
        });

        return () => {
            painValueSubscription.unsubscribe();
        };
    }, []);

    return (
        <Grid
            className='ScreenFooter'
            container
            direction='row'
            justifyContent='space-between'
        >
            <BackButton
                onClick={() => {
                    //TODO Define what behavior this particular instance of the button click must have.
                    console.log('Back Button Pressed');
                }}
            />
            <ContainedButton
                title={'NEXT'}
                isDisabled={painValue === null}
                onClick={() => {
                    //TODO Define what behavior this particular instance of the button click must have.
                    console.log('Next Button Pressed');
                }}
            />
        </Grid >
    );
};

export default ScreenFooter;