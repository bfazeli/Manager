import {
    EMPLOYEE_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload == {prop: 'name', value: 'jane'}
                // [] is not an array, it's for KEY INTERPOLATION
            return {...state, [action.payload.prop] : action.payload.value}
            break;
        default:
            return state
    }
}