import { changeSidebar } from "../Actions/Actions";

const initial_state = false;

export default function (state = initial_state, { type, payload }) {
  switch (type) {
    case changeSidebar:
      return !state;
    default:
      return state;
  }
}
