import { DecreaseCountType, IncreaseCountType, ResetCountType, UpdateAmountType } from "./ActionType.js"


export const IncreaseCount = () => {
 return {
   type: IncreaseCountType,
 }
}

export const DecreaseCount = () => {
  return {
    type: DecreaseCountType,
  }
}

export const ResetCount = () => {
  return {
    type: ResetCountType,
  }
}

export const UpdateAmount = (amount) => {
  return {
    type: UpdateAmountType,
    payload: {
      amount,
    }
  }
}

// export const GetCount = () => async dispatch => {
//   const reponse = await 
// }

