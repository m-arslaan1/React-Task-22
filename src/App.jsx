import React from 'react';
import useFetch from './useFetch';
import './App.css'

const App = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {data && data.length > 0 ? (
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No posts available.</div>
      )}
    </div>
  );
};

export default App;
