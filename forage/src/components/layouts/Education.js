import '../stylesheets/Education.css';
import { Header } from "./Header";
import React, { useState, useEffect } from "react";
import { Bubble } from "../Bubble";

export const Education = ({ darkMode }) => {
    const [theme, setTheme] = useState(darkMode ? "dark" : "light");

    useEffect(() =>
        document.body.classList.add(theme)
    )

    useEffect(() => {
        theme === "light"
            ? document.body.classList.replace("dark", "light")
            : document.body.classList.replace("light", "dark")
    }, [theme])

    return (
        <>
            <svg viewBox="0 0 300 20" className="nav-cover">
                <path d="m 0,0 h 299.74058 v 14.27138 c -101.41409,7.92594 -203.550143,7.34486 -299.74058,0 z" />
            </svg>
            <div className="landing-background">
                <section className="landing-page">
                    <Header theme={theme} setTheme={setTheme} />
                        <iframe title="game" frameborder="0" src="https://itch.io/embed-upload/3159225?color=333333" className="game" allowFullScreen />

                </section>
                <Bubble className="bubble-1" large="true" />
                <Bubble className="bubble-2" large="true" />
                <Bubble className="bubble-3" />
                <Bubble className="bubble-4" />
                <Bubble className="bubble-5" />
                <Bubble className="bubble-6" />
                <Bubble className="bubble-7" />
            </div>
        </>
    );
}