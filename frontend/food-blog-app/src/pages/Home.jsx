import React from "react";
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeItems from "../components/RecipeItems";
export default function Home(){
  return(
    <>
    {/* <Navbar/> */}
    <section className="home">
        <div className="left">
            <h1>Food Recipe</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus accusantium temporibus in error sunt obcaecati amet. Corrupti assumenda quisquam itaque.</p>
            <button>Share your recipe</button>
          
        </div>

        <div className="right">
            <img src={foodRecipe} alt="" width = "320px"  height="300px" />

        </div>

    </section>

    <div className="bg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L80,69.3C160,107,320,181,480,192C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>

    <div className="recipe">
      <RecipeItems/>
    </div>
    {/* <Footer/> */}
    </>
  )
}