import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/slider'
import Scorebar from './assets/Scorebar'

const storyStyle = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        color: '#3ac1e8',
        fontFamily: "'Noto Sans JP', sans-serif",
    }

})
export default function () {
    const classes = storyStyle()
    return (
        <div className={classes.root}>
            <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
            <Scorebar/>
        </div>
    )
}
