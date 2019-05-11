import React from 'react';
import Spinner from '../../components/Spinner/Spinner'; // not provided in this post
import Error from '../../components/Error/Error'; // not provided in this post
import {useFetcher} from '../../hooks';

const Fetcher = ({ action, children }) => {
  const [data, loading, error] = useFetcher(action);
 
  if (loading) return <Spinner />;
  if (error) return <Error error={error} />
  if (!data) return null;

  console.log(children);
  return children(data);
};
export default Fetcher;