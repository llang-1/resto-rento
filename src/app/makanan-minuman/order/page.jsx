"use client"
import axios from "axios"
import Navbar from "@/components/ui/navbar"
import React, { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const foods = [
  { value: "mie bakwan", label: "Mie Bakwan" },
  { value: "sosis walid", label: "Sosis Walid" },
  { value: "ramen genkikara", label: "Ramen Genkikara" },
  { value: "mie hompimpa", label: "Mie Hompimpa" },
]

export default function Order() {
  const [open, setOpen] = useState(false)
  const [selectedFoods, setSelectedFoods] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const nameRef = useRef(null);
  const catatanRef = useRef(null);
  const numberRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    const catatan = catatanRef.current.value;
    setIsLoading(true)
    if (!name || !number) {
      setIsLoading(false)
      return toast.warning("Nama dan nomor meja harus diisi!", {
        description: "lengkapi dulu ya kak!",
      })
    }

    try {
      const res = await axios.post('/api/sendMessage', {
        message: `
  Orderan Masuk
  ===================
  - Nama : ${name}
  - Nomor Meja : ${number}
  - Makan & Minum : ${selectedFoods.join(', ')}
  - Catatan : ${catatan}
        `
      });

      toast.success("Pesanan telah dibuat. Silahkan tunggu yaa", {
        description: "terimakasih sudah mampir!",
      })
      setSelectedFoods([])
    nameRef.current.value = ""
    numberRef.current.value = ""
    catatanRef.current.value = ""
    } catch (error) {
      toast.error("Yahh error kak :(", {
        description: "coba ulang kembali yaa",
      })
    }
    setIsLoading(false)   
  }

  const toggleSelect = (foodValue) => {
    setSelectedFoods((prev) =>
      prev.includes(foodValue)
        ? prev.filter((item) => item !== foodValue)
        : [...prev, foodValue]
    )
  }

  const selectedLabels = foods
    .filter((food) => selectedFoods.includes(food.value))
    .map((food) => food.label)
    .join(", ")

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center p-2 mt-16">
        <Card className="w-[350px] md:w-[500px]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="font-bold text-xl">Order Form</CardTitle>
            <CardDescription>Harap isi input dengan benar.</CardDescription>
          </CardHeader>
          <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 mt-4">
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    type="text"
                    id="name"
                    ref={nameRef}
                    placeholder="Masukkan nama kamu"
                    className="placeholder:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="number">Nomor Meja</Label>
                  <Input
                    type="number"
                    id="number"
                    ref={numberRef}
                    placeholder="Masukkan nomor meja kamu"
                    className="placeholder:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="foods">Makan & Minum</Label>

                  <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full h-auto flex flex-wrap items-start gap-1 px-3 py-2 text-left"
                    >
                    {selectedFoods.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                            {foods
                                .filter((food) => selectedFoods.includes(food.value))
                                .map((food) => (
                                <span
                                    key={food.value}
                                    className="bg-gray-200 text-sm text-gray-800 px-2 py-0.5 rounded-full"
                                >
                            {food.label}
                            </span>
                            ))}
                        </div>
                    ) : (
                        <span className="text-gray-500">Pilih Makan & Minum...</span>
                )}
    <ChevronsUpDown className="ml-auto opacity-50 h-4 w-4 self-center" />
  </Button>
</PopoverTrigger>

                    <PopoverContent
                      align="center"
                      className="w-[300px] max-h-[250px] overflow-auto"
                    >
                      <Command>
                        <CommandInput placeholder="Cari makan & minum yuk..." />
                        <CommandList>
                          <CommandEmpty>
                            Yahh, makanan & minuman kamu cari gak ada.
                          </CommandEmpty>
                          <CommandGroup>
                            {foods.map((food) => (
                              <CommandItem
                                key={food.value}
                                onSelect={() => toggleSelect(food.value)}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedFoods.includes(food.value)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {food.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="number">Catatan</Label>
                  <Textarea 
                    ref={catatanRef}
                    placeholder="Masukkan catatan porsi disini!"
                  />
                </div>
              </div>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            <Button className={`cursor-pointer`} variant="outline" asChild>
              <Link href="/">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4 mr-2" />
                    Proses...
                </>
              ) : (
                "Kirim"
              )}
            </Button>
        </CardFooter>
        </form>
        </Card>
      </div>
    </>
  )
}
