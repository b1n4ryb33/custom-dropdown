import {easyObserverFactory} from '../helper/easy-observer/easyObserverFactory'

const dropdownFactory = function(itemList, defaultSelection = null){
    let _itemList = itemList;
    let _currentSelection = defaultSelection;
    let selectionObserver = easyObserverFactory();
    let itemListObserver = easyObserverFactory();
    

    const addItem = (item)=>{
        if(item === null || item === undefined){
            let error_message = "Can't add item which is null or undefined.";
            throw new Error(error_message);
        }
        _itemList.push(item);
        itemListObserver.notifyListeners(_itemList);
    }

    const removeItem = (item)=>{
        if(item == _currentSelection){
            _setSelection(null);
        }

        _itemList = _itemList.filter(l => l !== item);
        itemListObserver.notifyListeners(_itemList);
    }

    const setSelectionByValue = (value) => {
        if(!_itemInItemList(value)){
            const err_msg = "Can't set selection with value not in item list."
            throw new Error(err_msg);
        }

        _setSelection(value);
    }

    const setSelectionByIndex = (index) => {
        if(!(index >= 0 && index < _itemList.length)){
            const err_msg = "Can't set selection with Index out of bounds.";
            throw new Error(err_msg);
        }

        _setSelection(_itemList[index]);
    } 

    const _setSelection = (value) => {
        _currentSelection = value;
        selectionObserver.notifyListeners(_currentSelection);
    }

    const getSelection = ()=>{
        return _currentSelection;
    }

    const getItemList = ()=>{
        return _itemList;
    }

    const getItemByValue = (item)=>{
        if(!_itemInItemList(item)){
            return null;
        }
        return _itemList.find(_item => _item === item);
    }

    const getItemsByValue = (item)=>{
        if(!_itemInItemList(item)){
            return null;
        }
        return _itemList.filter(_item => _item == item);
    }

    const _itemInItemList = (item)=>{
        return _itemList.some(_item => _item === item);
    }

    return {
        getSelection, getItemList, getItemsByValue, getItemByValue, setSelectionByIndex, setSelectionByValue,
        selectionObserver, itemListObserver, addItem, removeItem
    };

}

export { dropdownFactory };