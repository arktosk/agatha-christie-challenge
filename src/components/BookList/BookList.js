import React, { useState, useEffect } from 'react';
// import { firestore } from '../../firebase';
import novelsCollectionMock from '../../.mocks/novels';

const useFirestoreQuery = (ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const [novelsState, setNovelsState] = useState([]);
  
  useEffect(() => {
    // return ref.onSnapshot(snapshot => {
    //   setNovelsState({
    //     isLoading: false,
    //     data: snapshot.docs
    //   });
    // });
    novelsCollectionMock().then((novelsCollection) => {
      setIsLoading(false);
      setNovelsState(novelsCollection);
    })
  });
  
  return [
    isLoading,
    novelsState,
  ];
}

const BookList = () => {
  // const novels = firestore.collection('novels').orderBy('publication.year');
  const [isLoading, novelsCollection] = useFirestoreQuery(); // novels
  
  return <>
    {isLoading && <p>loading...</p>}
    {novelsCollection.length > 0 && <>
      <h4>Total count of books: {novelsCollection.length}</h4>
      <ul>
        {novelsCollection.map((novelDocument) => {
          const novel = novelDocument.data()
          return <li key={novelDocument.id}>{novel.title} ({novel.publication.year})</li>
        })}
      </ul>
    </>}
  </>
}

export default BookList;