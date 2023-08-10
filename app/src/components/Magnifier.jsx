import {useState} from "react";

function Magnifier({image, magnifierHeight, magnifierWidth, zoomLevel, saturationLevel}) {


    const [[xPos, yPos], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    return (
        <div className="magnifier">
            <div
                className={"large-img-container"}
            >
                <img
                    src={image}
                    className={"large-img"}
                    onMouseEnter={(e) => {

                        const elem = e.currentTarget;
                        const {width, height} = elem.getBoundingClientRect();
                        setSize([width, height]);
                        setShowMagnifier(true);
                    }}
                    onMouseMove={(e) => {

                        const elem = e.currentTarget;
                        const {top, left} = elem.getBoundingClientRect();


                        const xPos = e.clientX - left;
                        const yPos = e.clientY - top;
                        setXY([xPos, yPos]);
                    }}
                    onMouseLeave={() => {
                        // close magnifier
                        setShowMagnifier(false);
                    }}
                    alt={"img"}
                />

                <div
                    className={"small-img"}
                    style={{
                        display: showMagnifier ? "" : "none",

                        height: `${magnifierHeight}px`,
                        width: `${magnifierWidth}px`,

                        top: `${yPos - magnifierHeight / 2}px`,
                        left: `${xPos - magnifierWidth / 2}px`,
                        backgroundImage: `url('${image}')`,
                        backgroundRepeat: "no-repeat",

                        filter: `saturate(${saturationLevel}%)`,

                        backgroundSize: `${imgWidth * zoomLevel}px ${
                            imgHeight * zoomLevel
                        }px`,

                        backgroundPositionX: `${-xPos * zoomLevel + magnifierWidth / 2}px`,
                        backgroundPositionY: `${-yPos * zoomLevel + magnifierHeight / 2}px`
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Magnifier