import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Instructions() {
    return (

        <Container>
            <Link to="/">Home</Link>
            <Header headerText="Selbu-whist Instructions"/>
            <p><strong>Instructions</strong></p> 
                <p>This page explains the Selbu-whist game.</p>
                
                <p>Please refer to the official game rules on Wikipedia:
                  <ul>
                  <li>
                    <a href="https://en.wikipedia.org/wiki/Oh_Hell">English: Wikipedia:Oh Hell</a>
                    </li>
                    <li>
                    <a href="https://no.wikipedia.org/wiki/Selbu-whist">Norwegian: Wikipedia:Selbu-whist</a>
                    </li>
                    <li>
                    <a href="https://no.wikipedia.org/wiki/Bondebridge">Norwegian: Wikipedia:Bonde-bridge</a>
                    </li>
                    
                    </ul> 
                    </p> 
                
                <p>However, when I make the Selbu-whist app, I make it by the rules that I know and prefer, and so the gameplay 
                  might vary from the official rules. I have made these instructions available to explain how the app works.</p> 
                <p>
                  Selbu-whist is one of those games that takes a minute to learn, but a lifetime to master... You can pick it up in
                  a few hours, but depending on the number of players and their skill and on which round you are on, the tactics change
                  throughout the game. Also, since the full deck of cards is never in play, there is a amount of randomness to the game that
                  makes it hard for those card-counting prodigies, and more fun for me.. ;-)
                  </p> 
              
      
        </Container>
    )
}