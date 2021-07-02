import { DecreaseCountType, IncreaseCountType, ResetCountType, UpdateAmountType } from "../ActionType"


export const count = (
    state = {
      count: 0,
      amount: 1,
    }, action
  ) => {
    switch (action.type) {
      case IncreaseCountType: {
        return {
          ...state,
          count: state.count + state.amount,
        }
      }
      case DecreaseCountType: {
        return {
          ...state,
          count: state.count - state.amount,
        }
      }
      case ResetCountType: {
        return {
          ...state,
          count: 0,
          amount: 1,
        }
      }
      case UpdateAmountType: {
        return {
          ...state,
          amount: action.payload.amount,
        }
      }
      default: {
        return state;
      }
    }
  }