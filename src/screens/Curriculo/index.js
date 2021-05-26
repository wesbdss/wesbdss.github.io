import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Lateral from './components/lateral'
import Main from './components/Main';
import './index.css'

const storyStyle = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: '#4a4b54',
        width:"100vw",
        height:"100vh",
        flexDirection: 'column',
    }

})

export default function () {
    const classes = storyStyle();
    return (
        <div className={classes.root}>
            <Lateral/>
            <Main/>
        </div>
    )
}
