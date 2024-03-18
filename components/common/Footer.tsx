import { GeistMono } from "geist/font/mono"
import Logos from "../core/Logos";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`${GeistMono.className} py-5 border-t-2 border-gray-00 bg-black px-2 flex items-center text-sm justify-between uppercase`}>    
             <Logos/>
        </footer>
    )
}

export default Footer