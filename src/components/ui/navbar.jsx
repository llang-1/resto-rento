"use client"
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent shadow-md border-b sticky top-0 backdrop-blur-lg z-10 will-change-transform px-6 py-4">
            <div className="flex justify-between items-center w-full max-w-7xl">
                <h1 className="font-bold text-xl text-black">Rento Resto</h1>
                
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="hover:text-blue-600 transition font-semibold underline">Home</Link>
                    <Link href="/about" className="hover:text-blue-600 transition font-semibold underline">About</Link>
                    <Link href="/makanan-minuman/order" className="hover:text-blue-600 transition font-semibold underline">Order</Link>
                    <Link href="/makanan-minuman" className="hover:text-blue-600 transition font-semibold underline">Menu</Link>
                </div>

                <Button variant="default" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="white"/> : <Menu size={24} color="white" />}
                </Button>

            </div>
            {isOpen && (
                <div className="md:hidden mt-4 space-y-3 flex flex-col transition-all">
                <Link href="/" className="hover:text-blue-600 transition underline">Home</Link>
                <Link href="/about" className="hover:text-blue-600 transition underline">About</Link>
                <Link href="/makanan-minuman/order" className="hover:text-blue-600 transition underline">Order</Link>
                <Link href="/makanan-minuman" className="hover:text-blue-600 transition underline">Menu</Link>
                <Button asChild>
                <Link href="/makanan-minuman/order" >Order Sekarang</Link>
              </Button>
              </div>
            )}
        </nav>
    );
}