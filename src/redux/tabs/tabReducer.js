import { SWITCH_ACTIVE_TAB } from "./tabTypes";

const initialState = {
  activeTab: 1
}

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ACTIVE_TAB: return {
      ...state,
      activeTab: action.payload
    }
    default: return state
  }
}

export default tabReducer