import { store } from "../store";
export const globalDispatch = (action: Function) => store.dispatch(action);