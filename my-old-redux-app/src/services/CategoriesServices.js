import { USE_DUMMY_DATA, constants } from './../config';
import request from './BaseService'
import CategoriesStore from './../stores/CategoriesStore';

// Simulate POST /categories
const addCategories = (item) => {
    if(USE_DUMMY_DATA) {
        CategoriesStore.addItem(item);
    } else {
        return request({
            url: constants.paths.categories,
            method: 'POST',
            data: item
        })
    }
}

// Simulate DELETE /categories/:id
const deleteCategoryById = (id) => {
    if(USE_DUMMY_DATA) {
        CategoriesStore.removeItemById(id);
    } else {
        return request({
            url: constants.paths.categoryDetails.replace('{id}', id.toString()),
            method: 'DELETE'
        })
    }
}

// Simulate PUT /categories/:id
const updateCategoryById = (id, values) => {
    if(USE_DUMMY_DATA) {
        const item = getCategoryById(id);
        if (!item) {
            return null;
        }
        Object.assign(item, values);
        return item;
    } else {
        return request({
            url: constants.paths.categoryDetails.replace('{id}', id.toString()),
            method: 'PUT',
            data: values
        })
    }
}

// Simulate GET /categories
const getAllCategories = () => {
    if(USE_DUMMY_DATA) {
        return CategoriesStore.getItems();
    } else {
        return request({
            url: constants.paths.categories,
            method: 'GET',
        })
    }
}

// Simulate GET /categories/:id
const getCategoryById = (id) => {
    if(USE_DUMMY_DATA) {
        return CategoriesStore.getItems()
            .filter(item => item.id === id)
            .pop();
    } else {
        return request({
            url: constants.paths.categoryDetails.replace('{id}', id.toString()),
            method: 'GET',
        })
    }
}


/**
 * Service class to handle retrieve of categories data
 */
 export const CategoriesService = {
    addCategories,
    deleteCategoryById,
    updateCategoryById,
    getAllCategories,
    getCategoryById,
}

export default CategoriesService