import React, { useState, useEffect } from 'react';

const About = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name }),
      });
      if (response.ok) {
        console.log('データが正常に保存されました');
        // 成功した場合、フォームをリセットするなどの処理をここに追加
      } else {
        console.error('データの保存に失敗しました');
      }
    } catch (error) {
      console.error('エラーが発生しました:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
        名前:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <button type="submit">決定</button>
    </form>
  );
  };
  
  export default About;