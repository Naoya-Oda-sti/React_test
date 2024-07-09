import React, { useState, useEffect } from 'react';

const Works = () => {
  // データを保持するための状態
  const [data, setData] = useState([]);

  useEffect(() => {
    // 非同期関数でデータを取得
    const fetchData = async () => {
      try {
        // 仮のJSONデータURL、バックエンドのポイントに変更すること
        const response = await fetch('cards.json');
        const jsonData = await response.json();
        setData(jsonData); // 取得したデータを状態にセット
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    };

    fetchData();
  }, []); // 空の依存配列でコンポーネントのマウント時にのみ実行

  return (
    <div>
      <h1>Works</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.id}: {item.name}</li>
        ))}
      </ul>
    </div>
  );
  };
  
  export default Works;