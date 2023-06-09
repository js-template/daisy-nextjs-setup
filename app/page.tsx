import Footer from '@/components/footer'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Fragment } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function Home() {
   return (
      <Fragment>
         {/* Header */}
         <Header />

         {/* Page Body */}
         <main className="min-h-screen py-10 px-5 flex flex-wrap justify-center items-center gap-8">
            <div className="card w-96 bg-base-100 shadow-xl">
               <figure>
                  <Image
                     src="https://placehold.it/600x400"
                     alt="Shoes"
                     width={600}
                     height={400}
                     priority={true}
                     placeholder="blur"
                     blurDataURL="https://placehold.it/600x400"
                  />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">
                     Shoes!
                     <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                     <div className="badge badge-outline">Fashion</div>
                     <div className="badge badge-outline">Products</div>
                  </div>
               </div>
            </div>
         </main>

         {/* Footer */}
         <Footer />
      </Fragment>
   )
}
