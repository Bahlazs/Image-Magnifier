import './css/App.css';
import image from "./assets/18492-city-cityscape-metropolitan_area-capital_city-the_hague-7680x4320.jpg";
import {useEffect, useState} from "react";
import ZoomSlider from "./components/ZoomSlider.jsx";
import SaturationSlider from "./components/SaturationSlider.jsx";
import Magnifier from "./components/Magnifier.jsx";


const App = () => {

    const magnifierHeight = 100
    const magnifierWidth = 100
    const [zoomLevel, setZoomLevel] = useState(2)
    const [saturLevel, setSaturLevel] = useState(100)


    const handleZoomChange = (e, newValue) => {
        setZoomLevel(newValue)
    }
    const handleSaturChange = (e, newValue) => {
        setSaturLevel(newValue)
    }


    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            event.stopPropagation()
            const delta = Math.sign(event.deltaY);
            setZoomLevel((prevValue) => {
                let newValue = prevValue - delta;
                newValue = Math.max(1, Math.min(newValue, 10));
                return newValue;
            });

        };
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                setSaturLevel((prevValue) => {
                    if(prevValue < 100){
                        prevValue = prevValue + 1
                    }
                    return prevValue
                });
            } else if (event.key === 'ArrowLeft') {
                setSaturLevel((prevValue) => {
                    if(prevValue > 0){
                        prevValue = prevValue - 1
                    }
                    return prevValue
                });
            }
        };


        document.addEventListener('wheel', handleScroll, {passive: false});
        document.addEventListener('keyup', handleKeyDown, {passive: true})
        return () => {
            document.removeEventListener('wheel', handleScroll);
            document.removeEventListener('keypress', handleKeyDown)
        };
    }, []);

    return (
        <div className="app-container">
            <div className="title-and-data">
                <h1 className="title">Image Magnifier</h1>
                <div className="data">
                    <h2 className={"zoom-data"}>zoom level : {zoomLevel}, </h2>
                    <h2 className={"saturation-data"}> saturation level : {saturLevel}%</h2>
                </div>
            </div>
            <Magnifier image={image}
                       magnifierWidth={magnifierWidth}
                       magnifierHeight={magnifierHeight}
                       zoomLevel={zoomLevel}
                       saturationLevel={saturLevel}/>
            <div className="slider-container">
                <h2 className="zoom-controls">Adjust zoom level with the scroll wheel</h2>
                <ZoomSlider zoomLevel={zoomLevel} handleSliderChange={handleZoomChange}/>
                <h2 className="saturation-controls">Adjust saturation level with the left and right arrow keys </h2>
                <SaturationSlider saturLevel={saturLevel} handleSaturChange={handleSaturChange}/>
            </div>
        </div>

    )
}

export default App
