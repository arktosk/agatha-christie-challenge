import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
import BookListItem from './BookListItem';

const useFirestoreQuery = (ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const [novelsState, setNovelsState] = useState([]);

  useEffect(() => ref.onSnapshot((snapshot) => {
    setIsLoading(false);
    setNovelsState(snapshot.docs);
  }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return [
    isLoading,
    novelsState,
  ];
};

const BookList = () => {
  const novels = firestore.collection('novels').orderBy('publication.year');
  const [isLoading, novelsCollection] = useFirestoreQuery(novels);

  return (
    <>
      {isLoading && <p>loading...</p>}
      {novelsCollection.length > 0 && (
      <>
        <h4>
          {`Total count of books: ${novelsCollection.length}`}
        </h4>
        <ul>
          {novelsCollection.map((novelDocument) => {
            const novel = novelDocument.data();
            return (
              <li key={novelDocument.id}>
                <BookListItem book={novel} />
              </li>
            );
          })}
        </ul>
      </>
      )}
    </>
  );
};

export default BookList;
