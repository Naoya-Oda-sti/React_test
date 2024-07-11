import React, { useState, useEffect } from 'react';

function Test() {
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

  return (
    <div>
      <h1>食材から料理を検索</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient} onClick={() => setSelectedIngredient(ingredient)}>
            {ingredient}
          </li>
        ))}
      </ul>
      <h2>料理一覧</h2>
      <ul>
        {filteredDishes.map((dish) => (
          <li key={dish.name}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;