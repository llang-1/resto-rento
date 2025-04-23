"use client"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const reviews = [
    {name: "Agus Darsono", rating: 5, comment: "Makanannya enak enak, murah lagi!"},
    {name: "Bagas", rating: 5, comment: "pelayanannya mantep sih wkwkwk. next gua kesini lagi"},
    {name: "Nicholas Raharjo", rating: 4, comment: "bagus sih, tapi nunggu makanannya kelamaan bro"},
    {name: "Tung Tung Tung Sahur", rating: 5, comment: "gila sih ga expect bakalan ada tempat gym juga"},
    {name: "Vincent Duduk", rating: 2, comment: "Saya kesal, karena ada serangga dimakanan saya 😡😡"},
    {name: "Timothy Sales", rating: 1, comment: "Mending join kelas kripto gua"},
    {name: "Galing", rating: 2, comment: "mabar epep gaskan"},
    {name: "Mark Zukerberg", rating: 5, comment: "Ketika saya berkunjung ke indonesia dan makan di restoran ini. Saya merasa ini adalah surga dunia."},
]

export default function ReviewSection() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto place-items-center justify-center items-center gap-4 mt-4 mb-4" data-aos="zoom-in" data-aos-duration="800">
                {reviews.map((review, i) => (
                    <Card key={i} className="w-[300px]">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={`https://avatar.iran.liara.run/public/${i}`} />
                                <AvatarFallback>RR</AvatarFallback>
                            </Avatar>
                            <CardTitle className="font-bold">{review.name}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {Array.from({ length: 5}).map((_, index) => (
                                <Star 
                                    key={index}
                                    className={`h-4 w-4 ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                    fill={index < review.rating ? "currentColor" : "none"}
                                />
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}