import Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import * as React from "react";
import ReviewSection from "@/components/ui/review";
import Link from "next/link";


export default function Home() {
  return (

    <>
    <Navbar />
      <div className="flex flex-col items-start p-4 space-y-4">
          
          <div className="w-full">
            <h1 className="font-bold text-center mt-8 text-5xl text-black">Restoran Populer Di Bandung</h1>
            <p className="mt-8 text-gray-600 text-center">
              Restoran yang disukai banyak umat di dunia. Dimasak menggunakan cinta, sehingga masakan terasa lezat.
            </p>
            <div className="space-x-2 mt-4 flex justify-center items-center">
              <Button className="mt-4" asChild>
                <Link href="/makanan-minuman/order" >Order Sekarang</Link>
              </Button>
              <Button className="mt-4" variant="outline" asChild>
                <Link href="/makanan-minuman">Lihat Menu</Link>
              </Button>
            </div>
          </div>          
      </div>
      <div className="flex justify-center">
        <span className="text-center text-gray-600 text-xs font-mono mt-2">~ resto rento terbaik</span>
      </div>
      
      <ReviewSection />

    </>

  );
}
