"use client"

import { GeistMono } from "geist/font/mono"
import defaultWebsiteData from "@/data/base"
import QRCode from "react-qr-code"

const BarcodeCard = () => {
    return (
        <>
            <div className={`${GeistMono.className} mt-3 mx-auto border rounded-xl`}>
                <div className="items-center px-3 py-4 flex justify-center space-x-7">
                    <div>
                        <QRCode bgColor="#fff" size={120} value={defaultWebsiteData.url}/>
                    </div>
                    <div>
                        <p>
                            npm i @yuxxeun/sf   
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BarcodeCard