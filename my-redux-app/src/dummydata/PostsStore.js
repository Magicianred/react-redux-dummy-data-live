import { dummydatalist } from './posts';

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
 const getItemsByCategoryId = (categoryId) => {
    const filteredData = _data.filter(({categories}) => categories.includes(+categoryId));
    return filteredData;
 }
 
 const PostsStore = {
     getItems: () => _data,
     getItemsByCategoryId: (categoryId) => getItemsByCategoryId(categoryId),
     addItem: (item) => {
         item.id = getAndSetNewIdentifier();
         handleAddItem(item);
     },
     removeItemById: (id) => {
         handleRemoveItem(id);
     }
 };
 
 Object.freeze(PostsStore);
 export default PostsStore;