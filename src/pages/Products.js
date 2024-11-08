
import React, { useState } from 'react';
import oreoCupcake from '../images/OreoCupcake.jpg';
import applePie from '../images/ApplepieCupcake.jpg';
import chocolateStraw from '../images/ChocoStrawberry.jpg';
import cinnamonCup from '../images/CinnamonCupcake.jpg';
import mangoCup from '../images/MangoCupcake.jpg';
import mochaChup from '../images/MochaCupcake.jpg';
import strawberryCup from '../images/StrawberryCupcake.jpg';
import whiteChocoCup from '../images/Whitechocolate.jpg';
import cupcakeCake from '../images/cookieCake.avif';
import tradCake from '../images/TraditionalCake.jpg';
import altCake from '../images/AltCake.jpg';
import bohoCake from '../images/BohoCake.jpg';
import floralCake from '../images/FloralCake.jpg';
import glamCake from '../images/GlamCake.jpg';
import luxCake from '../images/LuxCake.jpg';
import floweryCake from '../images/floweryCake.avif';


import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const cupcakes = [
    { id: 1, name: 'Apple Pie Cupcake', price: '$3.50', image: applePie },
    { id: 2, name: 'Chocolate Strawberry Cupcake', price: '$4.00', image: chocolateStraw },
    { id: 3, name: 'Cinnamon Cupcake', price: '$3.50', image: cinnamonCup },
    { id: 4, name: 'Mango Cupcake', price: '$4.00', image: mangoCup },
    { id: 5, name: 'Mocha Cupcake', price: '$3.50', image: mochaChup },
    { id: 6, name: 'Oreo Cupcake', price: '$4.00', image: oreoCupcake },
    { id: 7, name: 'Strawberry Cupcake', price: '$3.50', image: strawberryCup },
    { id: 8, name: 'Whicte Chocolate Cupcake', price: '$4.00', image: whiteChocoCup },

  ];

  const weddingCakes = [
    { id: 1, name: 'Cupcake Wedding Cake', price: '$250', image: cupcakeCake },
    { id: 2, name: 'Traditional Wedding Cake', price: '$200', image: tradCake },
    { id: 3, name: 'Alternative Wedding Cake', price: '$270', image: altCake },
    { id: 4, name: 'Boho Wedding Cake', price: '$300', image: bohoCake },
    { id: 5, name: 'Floral Wedding Cake', price: '$250', image: floralCake },
    { id: 6, name: 'Glamorous Wedding Cake', price: '$300', image: glamCake },
    { id: 7, name: 'Luxurious Wedding Cake', price: '$450', image: luxCake },
    { id: 8, name: 'Flowery Wedding Cake', price: '$300', image: floweryCake },

  ];

  // Handler for category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Render products based on selected category
  const renderProducts = () => {
    const products = selectedCategory === 'cupcakes' ? cupcakes : weddingCakes;
    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="products-container">
      {!selectedCategory ? (
        <div className="category-selection">
          <button onClick={() => handleCategoryClick('cupcakes')} className="category-button">
            Cupcakes
          </button>
          <button onClick={() => handleCategoryClick('weddingCakes')} className="category-button">
            Wedding Cakes
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedCategory(null)} className="back-button">
            Back to Categories
          </button>
          {renderProducts()}
        </div>
      )}
    </div>
  );
};

export default Products;