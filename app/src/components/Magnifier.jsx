import {useState} from "react";

function Magnifier({image, magnifierHeight, magnifierWidth, zoomLevel, saturationLevel}) {


    const [[x, y], setXY] = useState([0, 0]);
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


                        const x = e.clientX - left;
                        const y = e.clientY - top;
                        setXY([x, y]);
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

                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifierWidth / 2}px`,
                        backgroundImage: `url('${image}')`,
                        backgroundRepeat: "no-repeat",

                        filter: `saturate(${saturationLevel}%)`,

                        backgroundSize: `${imgWidth * zoomLevel}px ${
                            imgHeight * zoomLevel
                        }px`,

                        backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Magnifier