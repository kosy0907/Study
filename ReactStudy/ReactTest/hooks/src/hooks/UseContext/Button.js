import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Button() {
    const { isDark, setIsDark } = useContext(ThemeContext);

    const onToggle = () => {
        setIsDark(!isDark);
    };

    return (
        <button className="button" onClick={onToggle}
            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
            }}
        >
            Change Color
        </button>
    );
}