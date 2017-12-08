export default function reducer(state={
  todo: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_TODOS': {
      return {...state, fetching: true}
    }
    case 'FETCH_TODOS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_TODOS_FULFILLED': {
      return {...state, todo: todo.payload, fetched: true, fetching: false}
    }
  }

  return state
}