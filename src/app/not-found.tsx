
import Image from 'next/image'
import logo from '../../asset/img/finmudra.png'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-4">
      <Image
        priority
        src={logo}
        alt="Picture of the author"
        width={180}
      />
      <h1 className="text-6xl font-bold text-red-500 mt-5">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
      <Link href="/" className="text-blue-500 underline">Go to Homepage</Link>
    </div>
  )
}
