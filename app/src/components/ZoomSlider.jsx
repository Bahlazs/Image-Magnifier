import { Slider } from "@mui/material";
import {useEffect, useState} from "react";

const ZoomSlider = ({ zoomLevel, handleSliderChange }) => {



    return (
        <div className={"zoom-container"}>
            <Slider
                value={zoomLevel}
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