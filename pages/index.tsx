import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'  
import {SiBookstack} from "react-icons/si";

import Aboutme from '../content/aboutme/Aboutme' /*Untuk import Aboutme.tsx*/
import Contact from '../content/contact/Contact'
import Repos from '../content/repos/Repos'
import { url } from 'inspector';

const Home: NextPage = () => {
  return (
    <div className='px-72' style={{backgroundImage: 'url(/BackgroundGede.jpg)'}}>
      <Head>
        <title>YudiPortofolio</title>
        <meta name="description" content="I'm an front-end web developer intern at Taksu Teknologi Bali" /> 
        <link rel="icon" href="/2 x 3.jpg"/>
      </Head>

      <main className=''>
        <h1 className='pt-20 text-4xl w-full flex justify-center'>
            Hi, I am an Full-Stack Intern Web Developer
        </h1>
        <div>
            <div id='Foto' className='px-8 mt-40 flex justify-left drop-shadow-xl'>
            <img className="h-100 w-60" src='4 x 6.jpg' alt='Wahyudi Photo'></img>
            <div id='Aboutme' className='text-xl ml-14'>
            <b className='justify-center flex pb-6'>About Me</b>
            <Aboutme></Aboutme> 
            </div>  
        </div>  
        
        <div id='Repos' className='px-8 py-8 text-xl justity-right'>
          <b className='flex justify-center pb-6'>Repositories</b>
          <Repos></Repos>
        </div>
        </div>
        
        {/*<div id='Aboutme' className='px-8 py-8 text-xl justify-center text-justify'>
          <Aboutme></Aboutme> 
        </div>*/}

        <div id='Contact' className='px-8 py-8 text-xl'>
          <b className='flex justify-center pb-6'>Contact</b>
          <Contact></Contact>
        </div>
      </main>

      <footer className='flex justify-center'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home