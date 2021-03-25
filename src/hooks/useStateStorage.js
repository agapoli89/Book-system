import { useState } from 'react';

function useStateStorage(key, defaultValue) {
    let value;
    const [state, setState] = useState(() => {
        const storageValue = window.localStorage.getItem(key);
        return storageValue ? value = JSON.parse(storageValue) : defaultValue;
    })    

    const setValue = val => {
        setState(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    }

    return [state, setValue]
}

export default useStateStorage;