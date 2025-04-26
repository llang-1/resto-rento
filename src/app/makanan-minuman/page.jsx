"use client"
import Navbar from "@/components/ui/navbar";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Menu() {

    const foods = [
        {name: "Mie Bakwan", description: "Mie gurih disajikan dengan bakwan renyah, perpaduan sederhana yang nikmat.", image: "/mie-bakwan.png",},
        {name: "Sosis Wow", description: "Sosis jumbo panggang dengan saus spesial, gurih dan menggoda selera.", image: "/sosis-walid-2.png",},
        {name: "Ramen Genkikara", description: "Ramen kuah pedas ala Jepang, lengkap dengan topping pilihan.", image: "/ramen-genkikara.png",},
        {name: "Mie Hompimpa", description: "Mie dengan bumbu khas dan beragam topping unik, cocok untuk semua suasana.", image: "/mie-hompimpa.png",},
    ]

  return (
    <>
      <Navbar />
      <div className="grid gap-4 p-4 mt-4 mb-4">
        {foods.map((food, i) => (
          <Card className="flex flex-row md:w-full w-[330px] place-content-center max-w-4xl mx-auto" key={i}>
                <div className="w-full md:w-[150px] flex-shrink-0 hidden md:block">
              <Image 
                src={food.image} 
                width={150} 
                height={150} 
                alt={food.name} 
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-between p-4 flex-grow">
              <CardHeader className="p-0">
                <CardTitle>{food.name}</CardTitle>
                <CardDescription>
                    {food.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex justify-center items-center">
                <div className="flex-shrink-0 md:hidden lg:hidden xl:hidden">
                    <Image 
                    src={food.image} 
                    width={100} 
                    height={100} 
                    alt={food.name}
                    className="mx-auto mr-2" 
                    />
                </div>
                <Button asChild>
                  <Link href={`/makanan-minuman/order`}>Order Sekarang</Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
