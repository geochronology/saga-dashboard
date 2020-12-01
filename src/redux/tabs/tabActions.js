import { SWITCH_ACTIVE_TAB } from "./tabTypes"

export const switchActiveTab = (tab = 1) => {
  return {
    type: SWITCH_ACTIVE_TAB,
    payload: tab
  }
}