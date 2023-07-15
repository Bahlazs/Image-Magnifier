import {useState} from "react";

function Magnifier({image, width, height, magnifierHeight, magnifieWidth, zoomLevel, saturationLevel}) {


    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    return (
        <div className="magnifier">
            <div
                className={"large-img"}
                style={{
                    position: "relative",
                    height: height,
                    width: width
                }}
            >
                <img
                    src={image}
                    style={{height: height, width: width}}
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
                    className={"small-image"}
                    style={{
                        display: showMagnifier ? "" : "none",
                        position: "absolute",

                        // prevent magnifier blocks the mousemove event of img
                        pointerEvents: "none",
                        // set size of magnifier
                        height: `${magnifierHeight}px`,
                        width: `${magnifieWidth}px`,
                        // move element center to cursor pos
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifieWidth / 2}px`,
                        opacity: "1", // reduce opacity so you can verify position
                        border: "1px solid lightgray",
                        borderRadius: "100%",
                        backgroundColor: "white",
                        backgroundImage: `url('${image}')`,
                        backgroundRepeat: "no-repeat",
                        filter: `saturate(${saturationLevel}%)`,

                        //calculate zoomed image size
                        backgroundSize: `${imgWidth * zoomLevel}px ${
                            imgHeight * zoomLevel
                        }px`,

                        //calculate position of zoomed image.
                        backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Magnifier