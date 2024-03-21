import { VercelLogoIcon, MagicWandIcon, GitHubLogoIcon   } from "@radix-ui/react-icons";
import baseData from '@/data/base';
import { GeistMono } from "geist/font/mono";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const downloadPDF = () => {
        const url = "/Capabilities.pdf";
        const a = document.createElement("a");
        a.href = url;
        a.download = "capabilities_deck.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <footer className={`${GeistMono.className} text-sm mt-4 py-5 uppercase flex px-4 justify-between items-center border-t`}>
            <div>
                <button className="text-green-500 uppercase" onClick={downloadPDF}> 
                    Capabilities deck ↓
                </button>
            </div>
            <div className="flex items-center space-x-3">
               <Link target="blank" href={baseData.github}>
                <GitHubLogoIcon/>
               </Link>
            </div>
            <div className="hidden md:block">
                @yuxxeun/sf
            </div>
        </footer>
    );
};

export default Footer;
