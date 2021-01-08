import React from 'react'
import { makeStyles } from '@material-ui/styles'
import "./index.css"
export default function () {
    return (
        <div id="drop-area">
           
            <form className="my-form">
                <p>Dropa aqui</p>
                <input type="file" id="fileElem" multiple accept="image/*" />
                <label className="button" for="fileElem">Select some files</label>
            </form>

        </div>
    )
}
