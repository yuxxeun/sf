"use client"

import { GeistMono } from "geist/font/mono"
import defaultWebsiteData from "@/data/base"
import QRCode from "react-qr-code"

const BarcodeCard = () => {
    return (
        <>
            <div className={`${GeistMono.className} mt-3 mx-auto border rounded-xl`}>
                <div className="items-center px-3 py-4 flex justify-center space-x-5">
                    <div>
                        <QRCode bgColor="#fff" size={110} value={defaultWebsiteData.url}/>
                    </div>
                    <div>
                        <p className="text-lg">
                            npm i @yuxxeun/sf
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BarcodeCard