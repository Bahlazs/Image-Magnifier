import { Slider } from "@mui/material";
import {useEffect, useState} from "react";

const ZoomSlider = ({ zoomLevel, handleSliderChange }) => {

    const [sliderState ,setSliderState]= useState(2)

    useEffect(() =>{
        setSliderState(zoomLevel)
    }, [zoomLevel])

    return (
        <div className={"zoom-container"}>
            <Slider
                value={sliderState}
                orientation="vertical"
                defaultValue={2}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={handleSliderChange}
            />
        </div>
    );
};

export default ZoomSlider;