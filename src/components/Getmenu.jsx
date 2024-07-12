import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Getmenu () {
  
  const [data, setData] = useState([]);// データを保持するための状態

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

  const delitem = async(dish) => {
    // バックエンドサーバーに消したい料理のIDを送る
    const data = { id: dish.id }; // バックエンドサーバーに送信するデータをJSON形式に変更
  
    try {
      const response = await fetch('http://localhost:3001/delete', {
        method: 'POST', // HTTPメソッド
        headers: {
          'Content-Type': 'application/json', // コンテンツタイプをJSONに設定
        },
        body: JSON.stringify(data), // 送信するデータをJSON形式に変換
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json(); // レスポンスのJSONを解析
      console.log('Server response:', responseData); // サーバーからのレスポンスをコンソールに表示
      setData((prevData) => prevData.filter(item => item.id !== dish.id));

    } catch (error) {
      console.error('Error sending data to server:', error); // エラーをコンソールに表示
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>献立確認メニュー</h1>

      <List style={{ width: '100%', maxWidth: 500 }}>
        {data.map((item) => (
          <ListItem button key={item.id}>
            <ListItemText primary={item.name} />
            <ListItemText primary={`${item.quantity}人前`} />
            <Button style={{color:"white",backgroundColor:"gray"}} onClick={() => delitem(item)}>
              <DeleteForeverIcon />
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
  };
  
  export default Getmenu;