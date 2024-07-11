import React, { useState, useEffect } from 'react';

const Contact = () => {
  // 要素のIDとNAMEをサーバーに送信する関数
  const sendContactData = (id, name) => {
    fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

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
      <h1>Contact</h1>
      {data.map((contact) => (
        <div key={contact.id}>
          {/* 送信ボタン。クリック時にsendContactDataを呼び出す */}
          <button onClick={() => sendContactData(contact.id, contact.name)}>{contact.name}</button>
        </div>
      ))}
    </div>
  );
}
  export default Contact;