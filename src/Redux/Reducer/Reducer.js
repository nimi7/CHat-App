

const Reducer = (state = '', action) => {

    switch (action.type) {
        case "Ben":
            return state = action.payload

        case 'Nimrod':
            return state = action.payload

        default: return state
    }

}

export default Reducer;