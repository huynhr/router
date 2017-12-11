export default function reducer(state={
  todo: ['learn router', 'learn redux', 'build backend'],
  fetching: false,
  fetched: false,
  error: null,
  test: 'hello world',
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
    case 'CHANGE_TEXT' : {
      return {...state, test: action.payload}
    }
  }

  return state
}