import {
  SAVE_DATA,
  REMOVE_DATA,
} from '../constants/action-types';

export const saveData = (article) => ({
  type: SAVE_DATA,
  payload: {article}
})

// export const removeData = (article) => ({
//   type: REMOVE_DATA,
//   payload: {article}
// })

export const removeData = (index) => ({
  type: REMOVE_DATA,
  payload: {index}
})