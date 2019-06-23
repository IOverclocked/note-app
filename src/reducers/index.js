import { REMOVE_ITEM, ADD_ITEM, LOGOUT, AUTHENTICATE_SUCCESS } from 'actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ],
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        userId: action.payload.data._id,
      };
    case LOGOUT:
      return {
        ...state,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};

export default rootReducer;
