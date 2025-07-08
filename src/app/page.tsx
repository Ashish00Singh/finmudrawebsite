"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from './components/Header';
import HomePage from './HomePage/page';
import GalaryR from './components/GalaryR';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <div className='shadow-md'>
        <Header />
      </div>
      <div 
      // className='imageBg'
      >
        <div className=' mainContainer'>
        <HomePage />
      </div>
      </div>

      <Footer/>

    </main>
  );
}
