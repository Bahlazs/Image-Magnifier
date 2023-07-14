import './css/App.css';
import image from "./assets/18492-city-cityscape-metropolitan_area-capital_city-the_hague-7680x4320.jpg";
import Magnifier from "react-magnifier";
import {useEffect, useState} from "react";
import {unstable_renderSubtreeIntoContainer} from "react-dom";
import ZoomSlider from "./components/ZoomSlider.jsx";




const App = () => {

    const magnifierHeight = 100
    const magnifierWidth = 100
    const [zoomLevel, setZoomLevel] = useState(2)
    const [saturLevel, setSaturLevel] = useState(1)

    const handleZoomChange = (e, newValue) => {
        setZoomLevel(newValue)
    }

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
          <h2>zoom level:{zoomLevel}</h2>

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
          />
        </div>
          <ZoomSlider handleSliderChange={handleZoomChange}/>
      </div>
  )
}

export default App
