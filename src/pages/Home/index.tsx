import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import "./styles.scss"

function Home() {

    const {isAuthenticated, user} = useAuth0<{
        nickname: string;
      }>();
      console.log(useAuth0());
  return (
    <section className='home'>
        <h1>
            {isAuthenticated ? `Hello ${user?.nickname}!` : "Hello!"}
           
        </h1>
        <h2>
            Please click Employees page to search through employees! 
        </h2>
    </section>
  )
}

export default Home