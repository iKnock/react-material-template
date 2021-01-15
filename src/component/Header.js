import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appBar: {
        background: 'none',
    },
    appBarTitle: {
        flexGrow: '1'
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    icon: {
        color: '#dd9',
        fontSize: '2rem',
    },
    titleColor: {
        color: '#5AFF3D'
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <h1 className={classes.appBarTitle}>
                        iknock <span className={classes.titleColor}>Solutions</span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />iknock <span className={classes.titleColor}>Solutions.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}
