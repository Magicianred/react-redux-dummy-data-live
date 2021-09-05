import isArray from 'lodash/isArray';

// convert data for details view
export const transformToDetails = ((item) => {
    const data = item.data;
    if(data) {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            text: data.text,
            categories: data.categories && isArray(data.categories) ?
                data.categories.map(cat => { return cat ? {
                    id: cat.id,
                    name: cat.name
                } : null })
            : null,
            createDate: data.createDate
        };
    }
    return undefined;
});

// convert data for list view
export const transformToList = ((data) => {
    return data && isArray(data) && data.map(item => { return transformToDetails(item)});
});