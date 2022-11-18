import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'


const Home: NextPage = () => {

  const [xCord, setXCord] = useState(0);
  const [yCord, setYCord] = useState(0);


  const mouseHandler = (e: any) => {
    console.log(e)
    setXCord(e.clientX);
    setYCord(e.clientY);
  }

  return (
    <div onMouseMove={mouseHandler} className="flex home">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className='flex flex-col gap-5 text-rose-400 text-3xl'>
      <h1>X: {xCord}</h1>
      <h1>Y: {yCord}</h1>
     </div>
    </div>
  )
}

export default Home
