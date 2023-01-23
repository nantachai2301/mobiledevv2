import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: 1,
    name: "running",
    duration: "1 hour",
  },
];

const activitiesReducer = (state = initialState, action) => {
  const { type, paylond } = action;
  switch (type) {
    case "CREATE_ACTIVITY":
      return [
        ...state,
        {
          id: uuidv4(),
          name: paylond.name,
          duration: paylond.duration,
        },
      ];
    case "DELETE_ACTIVITY":
      const copyState = [...state];
      const i = copyState.findIndex((x) => x.id === paylond.id);
      copyState.splice(i, 1);
      return [...copyState];
    default:
      return state;
  }
};
export default activitiesReducer;
