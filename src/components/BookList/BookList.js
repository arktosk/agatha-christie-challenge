import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';

const useFirestoreQuery = (ref) => {
  const [docState, setDocState] = useState({
    isLoading: true,
    data: null
  });
  
  useEffect(() => {
    return ref.onSnapshot(docs => {
      setDocState({
        isLoading: false,
        data: docs,
      });
    });
  }, [ref]);
  
  return docState;
}

const BookList = () => {
  // const novels = firestore.collection('novels');
  // const { isLoading, data } = useFirestoreQuery(novels);

  firestore.collection('novels').doc('07ybtRduw8i1w0Ro289x').get().then(snapshot => {
    console.log(snapshot)
  })
  
  return <>
    {/* {isLoading && <p>loading...</p>} */}
    {/* {data && <ul>
      {data.docs.map(doc => <li></li>)}
    </ul>} */}
  </>
}

export default BookList;