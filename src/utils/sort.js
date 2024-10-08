export const deepSortObjectKeys = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(deepSortObjectKeys); 
    } else if (obj !== null && typeof obj === 'object') {
        const sortedObj = {};
        if (obj.title) {
            sortedObj.title = obj.title;
        }
        Object.keys(obj)
            .filter(key => key !== 'title' && key !== 'createdAt' && key !== 'updatedAt')
            .sort((a, b) => b.localeCompare(a))
            .forEach(key => {
                sortedObj[key] = deepSortObjectKeys(obj[key]);
            });
        
        if (obj.createdAt) {
            sortedObj.createdAt = obj.createdAt;
        }
        if (obj.updatedAt) {
            sortedObj.updatedAt = obj.updatedAt;
        }

        return sortedObj;
    }
    return obj;
};