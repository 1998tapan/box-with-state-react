import { useState } from "react";
import Box from "./Box";

export default function BoxGrid({ boxNum }) {
    const initialState = (boxNum) => Array.from({ length: boxNum }).fill(false);

    const [isActive, setIsActive] = useState(() => initialState(boxNum));

    // const toggleColor = (idx) => (
    //     setIsActive(previous => {
    //         const newState = [...previous];
    //         newState[idx] = !newState[idx];
    //         return newState;
    //     })
    // )

    const toggleColor = (idx) => {
        setIsActive(previous => {
            return previous.map((b, i) => i === idx ? !b : b)
        })
    }
    return (
        <div className="BoxGrid">
            {isActive.map((b, idx) => (
                <Box isActive={b} key={idx} toggle={() => toggleColor(idx)} />
            ))}
            <button onClick={() => setIsActive(initialState(boxNum))}>Reset</button>
        </div>
    )
}