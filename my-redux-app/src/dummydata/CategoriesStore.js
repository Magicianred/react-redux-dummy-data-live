import { dummydatalist } from './categories';

/**
 * A Singleton data store
 */
 let _lastId = dummydatalist.reduce((prev, current) => (prev.id > current.id) ? prev : current);
 let _data = dummydatalist;

 const getAndSetNewIdentifier = () => {
     return ++_lastId;
 }
 const handleAddItem = (item) => {
    _data.push(item);
 }
 const handleRemoveItem = (id) => {
    _data = _data.filter(item => item.id !== id);
 }
 
 const CategoriesStore = {
     getItems: () => _data,
     addItem: (item) => {
         item.id = getAndSetNewIdentifier();
         handleAddItem(item);
     },
     removeItemById: (id) => {
         handleRemoveItem(id);
     }
 };
 
 Object.freeze(CategoriesStore);
 export default CategoriesStore;