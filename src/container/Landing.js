import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from '../component/Header'
import PlaceToVisit from '../component/PlaceToVisit'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/image/main-header.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));

export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <PlaceToVisit />
        </div>
    );

}
