// DataFetchingComponent.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PostList } from './PostList';

interface Post {
  id: number;
  title: string;
  body: string;
}

const DataFetchingComponent: React.FC = () => {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        setError('Помилка завантаження даних');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Асинхронне Завантаження Даних</h1>
      {loading && <p>Завантаження даних...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && data && <PostList posts={data.slice(0, 10)} />}
    </div>
  );
};

export default DataFetchingComponent;