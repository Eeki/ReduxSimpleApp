export function selectBook(book) {
  console.log(`A book has beeb selelcted: ${book.title}`);
  //SelectBook is an ActionCreator, it need to return an action na object with a type property.

  return {
    type : 'BOOK_SELECTED',
    payload: book
  };
}