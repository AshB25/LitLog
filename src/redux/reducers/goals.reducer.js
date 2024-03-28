const goals = (state = [], action) => {
  switch (action.type) {
    case 'SET_GOALS':
      return action.payload;
    default:
      return state;
  }
};

export default goals;
