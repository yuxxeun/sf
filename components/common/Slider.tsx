import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const Slider = () => {
    const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
    return (
        <>
            <div className='flex items-center justify-between border py-5'>
                <div>
                    <ScrollArea.Root className="w-[350px] h-[500px] rounded overflow-hidden">
                        <ScrollArea.Viewport className="w-full h-full rounded">
                        <div className="px-4">
                            <div className="bg-black uppecase sticky z-50 top-0 text-left text-xl font-bold pb-3">
                                ABOUT
                            </div>
                           <div className='text-gray-400 text-left mt-5 text-lg'>
                                Studio Freight is an independent creative studio built on principle.
                           </div>
                           <div className="mt-5 bg-black uppecase sticky z-50 top-0 text-left text-xl font-bold pb-3">
                                INDEPENDENT
                            </div>
                           <div className='text-gray-400 text-left mt-5 text-lg'>
                                We rise to the level of the limits we accept. At the heart of Studio Freight is independent thinking, we are owned by ourselves and collaborate with those willing to choose and create the realities they want to live in. There are no rules, only consequences.
                           </div>
                           <div className="mt-5 bg-black uppecase sticky z-50 top-0 text-left text-xl font-bold pb-3">
                                CREATIVE STUDIO
                            </div>
                           <div className='text-gray-400 text-left mt-5 text-lg'>
                                Studio Freight is a creative business, practice, and project. We build brands and experiences. We incubate products and experiments. We invest in companies and people. Our pursuits vary widely, but the approach remains — a great creative practice is the known path to great unknowns.
                           </div>
                        </div>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar
                        className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                        orientation="vertical"
                        >
                        <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                        </ScrollArea.Scrollbar>
                        <ScrollArea.Scrollbar
                        className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                        orientation="horizontal"
                        >
                        <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                        </ScrollArea.Scrollbar>
                        <ScrollArea.Corner className="bg-blackA5" />
                    </ScrollArea.Root>
                </div>
                <div>
                <ScrollArea.Root className="w-[500px] h-[500px] rounded overflow-hidden">
                <ScrollArea.Viewport className="w-full h-full rounded">
                <div className="px-5">
                    <div className="uppercase sticky top-0 bg-black pb-4 font-bold">
                        Projects
                    </div>
                    {TAGS.map((tag) => (
                    <div
                        className="flex items-center justify-between text-lg uppercase font-semibold mt-5 pt-5 border-t border-t-mauve6"
                        key={tag}
                    >
                        <div>
                            {tag}
                        </div>
                        <div>
                            {tag}
                        </div>
                    </div>
                    ))}
                </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
                >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="horizontal"
                >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="bg-blackA5" />
            </ScrollArea.Root>
                </div>
                <div>
                <ScrollArea.Root className="w-[600px] h-[500px] rounded overflow-hidden">
                <ScrollArea.Viewport className="w-full h-full rounded">
                <div className="py-[15px] px-5">
                    <div className="text-violet11 text-[15px] leading-[18px] font-medium">Tags</div>
                    {TAGS.map((tag) => (
                    <div
                        className="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
                        key={tag}
                    >
                        {tag} 
                    </div>
                    ))}
                </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
                >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="horizontal"
                >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="bg-blackA5" />
            </ScrollArea.Root>
                </div>
            </div>
        </>
    )
}

export default Slider;
