import './css/App.css';
import image from "./assets/18492-city-cityscape-metropolitan_area-capital_city-the_hague-7680x4320.jpg";
import Magnifier from "react-magnifier";
import {useEffect, useState} from "react";
import ZoomSlider from "./components/ZoomSlider.jsx";
import SaturationSlider from "./components/SaturationSlider.jsx";


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

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight' && saturLevel< 100) {
            setSaturLevel((prevValue) => prevValue + 1);
        } else if (e.key === 'ArrowLeft' && saturLevel > 0) {
            setSaturLevel((prevValue) => prevValue - 1);
        }
    };


    useEffect(() => {
        const handleScroll = (event) => {
            const delta = Math.sign(event.deltaY);
            setZoomLevel((prevValue) => {
                let newValue = prevValue - delta;
                newValue = Math.max(1, Math.min(newValue, 10));
                return newValue;
            });
        };

        document.addEventListener('wheel', handleScroll);

        return () => {
            document.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="app-container">
            <h2 className={"data"}>zoom level : {zoomLevel} saturation level : {saturLevel}%</h2>

            <div className={"magnifier-container"}>
                <Magnifier
                    src={image}
                    width={'768px'}
                    height={'432px'}
                    mgBorderWidth={1}
                    mgShape={'circle'}
                    mgHeight={magnifierHeight}
                    mgWidth={magnifierWidth}
                    zoomFactor={zoomLevel}
                    style = {{
                        filter: `saturate(${saturLevel}%)`
                    }}
                />
            </div>
            <ZoomSlider zoomLevel={zoomLevel} handleSliderChange={handleZoomChange}/>
            <SaturationSlider saturLevel={saturLevel} handleSaturChange={handleSaturChange} handleKeys={handleKeyDown}/>
        </div>
    )
}

export default App
