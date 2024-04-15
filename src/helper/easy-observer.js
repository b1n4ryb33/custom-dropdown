const easyObserverFactory = () => {
    let _listeners = [];

    const addListener = (listener) => {
        _listeners.push(listener);
    }

    const removeListener = (listener) => {
        _listeners = _listeners.filter(l => l !== listener);
    }

    const notifyListeners = (item) => {
        _listeners.forEach(listener => listener(item));
    }

    return {addListener, removeListener, notifyListeners};
}

export {easyObserverFactory};