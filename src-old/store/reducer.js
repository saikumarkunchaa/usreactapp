
const initialState = {}

const reducer = (state = initialState ,action) => {
    console.log(action)
    switch(action.type) {
        case 'DATA_LOADED':
        const data = action.apidata.data;
        return {
            ...state, data
        }
        default:
        return {...state}
    }

}

export default reducer;

