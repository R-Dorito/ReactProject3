import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Paths } from "./paths";

// function toPixle(value) {
//     return value + "px";
// }

// export const Home = () => {
//     const [pressed, setPressed] = useState(false);
//     const [Position, setPosition] = useState({ X: null, y: null });
//     // const ref = useRef();

//     function move(event) {
//         setPosition({
//             X: event.clientX,
//             Y: event.clientY,
//         });
//     }
//     useEffect(() => {
//         window.addEventListener("mousemove", move);
//         return () => window.removeEventListener("mousemove", move);
//     });

//     return (
//         <div
//             onMouseDown={move}
//             style={{
//                 width: "100px",
//                 height: "100px",
//                 left: toPixle(Position.X),
//                 top: toPixle(Position.Y),
//                 backgroundColor: "green",
//                 position: "absolute",
//             }}
//         ></div>
//     );
// };

const quickAndDirtyStyle = {
    width: "200px",
    height: "200px",
    background: "#FF9900",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export const Home = () => {
    const [pressed, setPressed] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef();

    //Monitor changes to position state and update DOM
    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
    }, [position]);

    //Update the current position if mouse is down
    const onMouseMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY,
            });
        }
    };

    return (
        <>
            <div
                ref={ref}
                style={quickAndDirtyStyle}
                onMouseMove={onMouseMove}
                onMouseDown={() => setPressed(!pressed)}
            ></div>
            <Link to={Paths.FoodChicken}> To the Chicken Page </Link>
        </>
    );
};
