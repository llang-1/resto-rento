import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {

    const body = await request.json();
    const { message } = body;

    const apiBot = ""; // di isi dengan api key bot yang di dapatkan di @botFather
    const idTele = ""; // id telegram yang didapatkan di bot @findMyId
    
    try {
        const response = await axios.post(`https://api.telegram.org/bot${apiBot}/sendMessage`,
            new URLSearchParams({
                chat_id: idTele,
                parse_mode: 'Markdown',
                text: message
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            }
        );
        if (response.data.ok) {
            return new Response(JSON.stringify({ message: "Pesanan berhasil terkirim" }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            })
        } else {
            return new Response(JSON.stringify({ message: "Pesanan gagal terkirim" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            })
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "server error", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }
}
