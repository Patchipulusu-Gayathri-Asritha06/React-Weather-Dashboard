function useLocalStorage(key) {
    const getItem = () => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    };

    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    return {
        getItem,
        setItem
    };
}

export {
    useLocalStorage
};