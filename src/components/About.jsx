import React, { useState } from 'react';

const About = () => {
  // IDと名前の状態を管理するためのuseStateフック
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  // フォームが送信されたときに実行される関数
  const handleSubmit = async (event) => {
    event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

    // APIエンドポイントのURL
    const apiUrl = 'http://localhost:3001/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST', // HTTPメソッド
        headers: {
          'Content-Type': 'application/json', // コンテンツタイプをJSONに設定
        },
        body: JSON.stringify({ id, name }), // IDと名前をJSON形式で送信
      });

      if (!response.ok) {
        throw new Error('APIリクエストに失敗しました');
      }

      const data = await response.json(); // レスポンスのJSONを解析
      console.log('サーバーからのレスポンス:', data);
      // ここで成功したレスポンスに基づいて何かをする
    } catch (error) {
      console.error('エラーが発生しました:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>About</h1>
        <label>ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)} // ユーザーの入力に基づいてid状態を更新
        />
      </div>
      <div>
        <label>名前:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // ユーザーの入力に基づいてname状態を更新
        />
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

export default About;