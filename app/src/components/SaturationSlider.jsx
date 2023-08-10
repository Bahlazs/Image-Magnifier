import { Slider } from "@mui/material";
import {useEffect, useState} from "react";

const SaturationSlider = ({saturLevel, handleSaturChange, handleKeys}) => {


    return (
        <div className={"saturation-slider"}>
            <Slider
                value={saturLevel}
                defaultValue={100}
                step={1}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
                onChange={handleSaturChange}
                onKeyDown={handleKeys}
            />
        </div>
    )
}

export default SaturationSlider