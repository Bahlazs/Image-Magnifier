import { Slider } from "@mui/material";
import {useEffect, useState} from "react";

const SaturationSlider = ({saturLevel, handleSaturChange, handleKeys}) => {
    const [sliderState ,setSliderState]= useState(2)

    useEffect(() =>{
        setSliderState(saturLevel)
    }, [saturLevel])

    return (
        <div className={"saturation-slider"}>
            <Slider
                value={sliderState}
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