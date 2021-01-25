const initialStateCount = {
  count: 0,
  name: 'risano'
}

const countReducer = (state = initialStateCount, action) => {
  // if (action.type === 'INCREMENT') {
  //   return {
  //     ...state,
  //     count: state.count + 1
  //   }
  // } else if (action.type === 'DECREMENT') {
  //   return {
  //     ...state,
  //     count: state.count - 1
  //   }
  // } else {
  //   return state
  // }

  // switch (action.type) {
  //   case 'INCREMENT':
  //     return {
  //     ...state,
  //     count: state.count + 1
  //   }
  //   case 'DECREMENT':
  //     return {
  //     ...state,
  //     count: state.count - 1
  //   }
  //   default:
  //     return state
  // }
  const _actions = {
    INCREMENT: () => {
      return {
        ...state,
        count: state.count + 1
      }
    },
    DECREMENT: () => {
      return {
        ...state,
        count: state.count + 1
      }
    },
    DEFAULT: () => state
  }
  return (_actions[action.type] || _actions.DEFAULT)()
}
export default countReducer