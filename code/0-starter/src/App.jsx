//importing React to use JSX syntax
import React from 'react';
import RecipeTitle from './RecipeTitle'
import './index.css'

function App() {
    //returning JSX
    return (
        //JSX uses XML which requires one root element
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle />
        </article>
    )
}

//allows the App function to be avail for use in other files
//exported and can be imported and used elsewhere
//default - the App is the default thing to be exported from this file
//import App from './App'
export default App;