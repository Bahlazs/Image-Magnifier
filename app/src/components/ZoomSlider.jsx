import {Slider} from "@mui/material";

const ZoomSlider = ({zoomLevel, handleSliderChange}) => {
    return (
        <div className={"zoom-slider-container"}>
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
            <p>{zoomLevel}</p>
        </div>
    )

}

export default ZoomSlider