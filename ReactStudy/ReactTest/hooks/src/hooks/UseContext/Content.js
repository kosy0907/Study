import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Content() {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className="content"
            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
            }}
        >
            <h1>Test</h1>
        </div>
    );
}