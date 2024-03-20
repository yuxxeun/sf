import { GeistMono } from "geist/font/mono"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`${GeistMono.className} mt-4 py-5 uppercase flex px-4 justify-between items-center border-t`}>    
             <div>
                <button className="text-green-500 uppercase"> 
                    Capabilities deck ↓
                </button>      
             </div>
             <div>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
             </div>
             <div className="lowercase hidden md:block">
                @yuxxeun - {currentYear}
             </div>
        </footer>
    )
}

export default Footer