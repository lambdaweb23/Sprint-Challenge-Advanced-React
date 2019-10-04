import { useEffect } from 'react';

import UseLocalStorage from './UseLocalStorage';

const UseDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = UseLocalStorage('dark mode', initialValue);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default UseDarkMode;