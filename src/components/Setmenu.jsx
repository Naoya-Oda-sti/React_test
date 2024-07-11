import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Setmenu() {
  const [dishes, setDishes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');

  useEffect(() => {
    // バックエンドから料理のデータを取得
    fetch('http://localhost:3001/dishes')
      .then(response => response.json())
      .then(data => setDishes(data))
      .catch(error => console.error('Error fetching dishes:', error));

    // バックエンドから食材のデータを取得
    fetch('http://localhost:3001/ingredients')
      .then(response => response.json())
      .then(data => setIngredients(data))
      .catch(error => console.error('Error fetching ingredients:', error));
  }, []); // 空の依存配列を渡して、コンポーネントのマウント時にのみ実行

  // 選択された食材を含む料理をフィルタリング
  const filteredDishes = dishes.filter(dish =>
    dish.ingredients.includes(selectedIngredient)
  );

  const setmenu = async(dish) => {
    // console.log(dish.id,dish.name,dish.quantity); // 選択された料理の名前をコンソールに表示
      
    const data = { id: dish.id, name: dish.name,quantity: dish.quantity};// バックエンドサーバーに送信するデータ

    try {
      const response = await fetch('http://localhost:3001/menu', {
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
    } catch (error) {
      console.error('Error sending data to server:', error); // エラーをコンソールに表示
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>食材から料理を検索</h1>
      <List style={{ width: '100%', maxWidth: 360 }}>
        {ingredients.map((ingredient) => (
          <ListItem button key={ingredient} onClick={() => setSelectedIngredient(ingredient)}>
            <ListItemText primary={ingredient} />
          </ListItem>
        ))}
      </List>
      <h2>料理一覧</h2>
      <List style={{ width: '100%', maxWidth: 500 }}>
        {filteredDishes.map((dish) => (
          <ListItem button key={dish.name}>
            <ListItemText primary={dish.name} />
            <ListItemText primary={"mmm.sample.c0m"} />
            {/* 数量を指定する入力フィールドを追加 */}
            <Input
              type="number"
              sx={{ "& .MuiInputBase-input": { height: 25 }, width: 50 }}
              min="1"
              defaultValue=""
              onChange={(e) => dish.quantity = parseInt(e.target.value, 10)}
              style={{ marginLeft: '10px' }}
            />
            {/* 料理名をクリックした際にバックエンドに情報を送信するボタンを追加 */}
            <Button style={{color:"white",backgroundColor:"gray"}} onClick={() => setmenu(dish)}>
              登録
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Setmenu;