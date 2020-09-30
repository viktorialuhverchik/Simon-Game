import React, { useState, useEffect } from 'react';

import './Themes.css';


const themes: any = {
    classical: "Classical",
    synthwave: "Synthwave"
};

const Themes = () => {

    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("theme") || themes.classical);

    const toggleTheme = (theme: any) => {
        if (theme === themes.classical) {
            setSelectedTheme(themes.synthwave);
        } else if (theme === themes.synthwave) {
            setSelectedTheme(themes.classical);
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", selectedTheme);

        if (selectedTheme === themes.synthwave) {
            document.body.classList.add("synthwave-theme");
        } else {
            document.body.classList.remove("synthwave-theme");
        }
    });

    return (
        <div className="toggle-themes-button" onClick={() => toggleTheme(selectedTheme)}>
            <h5>{selectedTheme}</h5>
        </div>
    );
};

export default Themes;
