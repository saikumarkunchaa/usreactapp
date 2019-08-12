
const initialState = {count:9}

const reducer = (state = initialState ,action) => {
    switch(action.type) {
        case 'DATA_LOADED':
        const data = action.DATA_LOADED;
        return {
            ...state, data
        }
        default:
        return {...state}
    }

}

export default reducer;

