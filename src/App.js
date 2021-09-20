import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import ImageSection from './components/ImageSection';
import indregients from './data.js'; 
import IngredientList from './components/IngredientList';

export default class App extends React.Component {
  render() {
    return(
      <>
      <header>
      <Header/>
      </header>

      <div>
        <ImageSection />
        <Recipe />
      </div>
      
      {
        indregients.map(ingredient =>
          <IngredientList 
          measure = {ingredient.amount}
          state = {ingredient.utensils}
          item = {ingredient.goods}
          />)
      }

        <footer>
      <Footer/>
        </footer>
      </>
    )
  }
}
