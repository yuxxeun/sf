"use client"

import * as Scrollytelling from '@bsmnt/scrollytelling'

const ScrollAnimation = () => {
    return (
        <Scrollytelling.Root>
            <div className='container'>
                <Scrollytelling.Animation tween={{ start: 0, end: 30, from: {opacity: 0, scale: 0.9 } }}>
                    <h1 className='text-white'>
                        @bsmnt/scrollytelling
                    </h1>
                </Scrollytelling.Animation>
                <Scrollytelling.Animation tween={[
                    { start: 30, end: 80, to: { rotate: 360 } },
                    { start: 80, end: 100, to: { y: 100 } }
                ]}>
                    <div className='box'/>
                </Scrollytelling.Animation>
            </div>
        </Scrollytelling.Root>
    )
}

export default ScrollAnimation