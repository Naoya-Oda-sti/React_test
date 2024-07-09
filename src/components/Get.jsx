import React, { useState, useEffect } from 'react';

const Get = () => {
  // データを保持するための状態
  const [data, setData] = useState([]);

  useEffect(() => {
    // バックエンドからデータを取得
    fetch('http://localhost:3001/get')
      .then(response => response.json())
      .then(data => {
        // データが配列でない場合、配列に変換
        if (!Array.isArray(data)) {
          data = [data];
        }
        setData(data);
      })
      .catch(error => console.error("データの取得に失敗しました:", error));
  }, []);

  return (
    <div>
      <h1>Get</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.id}: {item.name}</li>
        ))}
      </ul>
    </div>
  );
  };
  
  export default Get;