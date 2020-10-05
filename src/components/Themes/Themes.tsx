import React, { useState, useEffect, FC } from 'react';
import { IThemes } from '../../types';

import './Themes.css';

const themes: IThemes = {
    classical: "Classical",
    synthwave: "Synthwave"
};

const Themes: FC = () => {

    const [selectedTheme, setSelectedTheme] = useState<string>(localStorage.getItem("theme") || themes.classical);

    const toggleTheme = (theme: string) => {
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
        <div
            className="toggle-themes-button"
            onClick={() => toggleTheme(selectedTheme)}
            data-testid="themes"
        >
            <h5>{selectedTheme}</h5>
        </div>
    );
};

export default Themes;
