import React, { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';

export default (initialUrl) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /* 현재 클릭한 경로에 따라서 데이터베이스에 저장된 메거진 중 해당 경로의 카테고리에 해당하는 것만 나타낸다 */
  useEffect(() => {
    const dataArray = [];
    const currentCategory = initialUrl.params.category;
    /* 데이터베이스에 'magazine','product' 테이블에 데이터가 저장되어 있으므로 경로 중 'magazine' 'product'를 빼서 ref에 넣어준다 */
    const pathArray = initialUrl.path.split('/');
    const query = firebase.database().ref(pathArray[1]).orderByKey();

    try {
      setLoading(true);

      query.once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          const childData = childSnapshot.val();
          if (currentCategory === undefined || childData.category === currentCategory) {
            dataArray.push(childData);
          }
        });
        setValue(dataArray);
      });
      setLoading(false);
    } catch (_error) {
      setLoading(false);
      setError(_error);
    }
  }, [initialUrl.params.category]);

  return [value, error, loading];
};
