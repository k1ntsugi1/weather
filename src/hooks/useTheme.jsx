import React, { useEffect, useState } from "react";

function useTheme() {
    const [theme, setTheme] = useState(
        localStorage.getItem('current-theme') ?? 'light'
    );

    useEffect(()=> {
        document.querySelector('html').setAttribute('data-theme', theme);
        localStorage.setItem('current-theme', theme);
    }, [theme])
    
    return () => theme === "light" ? setTheme('dark') : setTheme('light');
}

export default useTheme;