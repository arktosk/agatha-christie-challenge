import { booksCollection } from "./../firebase";

export const fetchBooks = () => async dispatch => {
  await booksCollection.onSnapshot(async snapshot => {
    await dispatch({
      type: 'FETCH_BOOKS',
      payload: snapshot.docs.map( doc => doc.data() )
    });
  });
};