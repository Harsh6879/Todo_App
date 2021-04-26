import { addToList, removeTask } from '../constants';

const initialState = {
    ListData: []
}

export default function listItem(state = initialState, action) {

    switch (action.type) {
        case addToList:
            let newListData = [...state.ListData, { value: action.data.input, id: action.data.id }];
            let newState = { ...state, ListData: newListData };
            return newState;
        case removeTask:

            let newlistData = state.ListData.filter(v => v.id !== action.data.id);
            let newstate = { ...state, ListData: newlistData };
            return newstate;
        default:
            return state;
    }

}