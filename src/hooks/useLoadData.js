import React, { useState, useEffect, useReducer } from 'react';
import firebase from '../firebase/firebase';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        fetchLoading: true,
        fetchError: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        fetchLoading: false,
        fetchError: null,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        fetchLoading: false,
        fetchError: action.payload,
      };
    default:
      return state;
  }
};
export default function useLoadData(initialKey, initialCategory, initialPath) {
  const initialState = {
    fetchLoading: false,
    fetchError: null,
    data: null,
  };
  const [empty, setEmpty] = useState(false);
  const dataArray = [];

  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  const loadData = async (key) => {
    const snapshot = await firebase.database().ref(key).once('value');
    return snapshot.val();
  };

  const sortData = (_data) => {
    let sortedData = null;
    if (initialCategory === 'all') {
      sortedData = _data;
    } else if (initialPath === 'brand') {
      sortedData = _data.filter(({ brand }) => brand === initialCategory);
    } else {
      sortedData = _data.filter(({ category }) => category === initialCategory);
    }
    return sortedData;
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await loadData(initialKey);
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const key in result) {
          dataArray.push(result[key]);
        }
        const categoryData = sortData(dataArray);
        dispatch({ type: 'FETCH_SUCCESS', payload: categoryData });
        if (categoryData.length === 0) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error });
      }
    };
    fetchData();
  }, [initialKey, initialCategory]);

  return [state.data, state.fetchLoading, state.fetchError, empty];
}
