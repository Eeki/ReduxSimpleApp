// State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) { //state = null --> ES6 tarkoittanen: if (state == undefined) {state = null}

  switch(action.type) {
    case 'BOOK_SELECTED':
      //state.title = book.title; //NO NO BAD!!! Need to return fresh object
      return action.payload;
  }

  return state
}