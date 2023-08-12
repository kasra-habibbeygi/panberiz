/* eslint-disable import/no-anonymous-default-export */
class Tools {
    tableRowCounter(page, index, limit = 10) {
        return limit * page - (limit - 1) + index;
    }
}

export default new Tools();
