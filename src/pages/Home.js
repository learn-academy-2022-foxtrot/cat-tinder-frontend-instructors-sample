import React from "react"
import catHome from "../assets/cat-home.png"

const Home = () => {

    return(
    

    
              <div>
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-3">Welcome to Cat Tinder</h1>
                    <p className="lead">
                      It's like Tinder, but for Cats!
                    </p>
                    <img
                      src={catHome}
                      alt="fluffy gray cat with sunglasses"
                      className="cat-home"
                    />
                  </div>
                </div>
              </div>
            )
          }
       
        


export default Home