import { useState, useEffect } from 'react';

export function useFetcher(action) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    
    async function loadData() {
        try {
            setLoading(true);
            const actionData = await action();
            setData(actionData);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }
    
    loadData();
  }, [action]);
  return [data, loading, error];
}