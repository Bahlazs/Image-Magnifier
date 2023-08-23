import {Slider} from "@mui/material";

const SaturationSlider = ({saturLevel, handleSaturChange}) => {

    return (
        <div className={"saturation-slider-container"}>
            <Slider
                value={saturLevel}
                defaultValue={100}
                step={1}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
                onChange={handleSaturChange}
            />
        </div>
    )
}

export default SaturationSlider