"use client"

import React, { useState, useEffect, useRef } from 'react';
import { PlayIcon, PauseIcon } from '@radix-ui/react-icons';
import confetti from 'canvas-confetti';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audioElement = audioRef.current;

        if (audioElement) {
            if (isPlaying) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying((prevState) => !prevState);
        playConfetti(); // Panggil fungsi playConfetti di sini
    };

    const playConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };

    return (
        <>
            <div title='play kobo music' className='mb-2.5'>
                <audio ref={audioRef} src="/kobo.mp3"></audio>
                <button className='rounded-full px-3 text-center py-1 border' onClick={togglePlayPause}>
                    { isPlaying ? <PauseIcon/> : <PlayIcon/> }
                </button>
            </div>
        </>
    );
};

export default MusicPlayer;
