import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaStar, FaStarHalf, FaAngleRight, FaAngleLeft} from "react-icons/fa6";

import { useRef, useState } from 'react';
import { useEffect } from 'react';

const testimonials = [
    {text : "Bon rapport qualité/prix. Délais respectés. Je recommande vivement !", author : "Arnaud.B / Professionnel", rating: 5},
    {text : "Travail impeccable, les fenêtres sont esthétiques et de qualité.", author : "Phillipe.G / Particulier", rating: 4.5},
    {text : "Un vrai accompagnement du début à la fin, un travail soigné et de bons conseils. Merci Menuitek !", author : "Lionel.P / Particulier", rating: 5},
]

function Avis() {
    const [index, setIndex] = useState(0);
    const [animationRight, setAnimationRight] = useState(true);
    const intervalRef = useRef(null);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setAnimationRight(true);
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
    }

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        startInterval();
    }

    useEffect(() => {
        startInterval();

        return () => clearInterval(intervalRef.current);
    }, []);

    const goToPrevious = () => {
        setAnimationRight(false);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        resetInterval();
    }

    const goToNext = () => {
        setAnimationRight(true);
        setIndex((prev) => (prev + 1) % testimonials.length);
        resetInterval();
    }

    return (
        <div className='flex flex-col gap-4 lg:gap-8 xl:gap-12 py-[5vh] xl:py-[10vh] 2xl:py[15vh] px-[5vw] xl:px-[8vw] overflow-x-hidden'>
            <p className='font-semibold text-brun-contrast'>AVIS</p>
            <div key={index} className={'flex flex-col py-[2vh] xl:py-[6vh] 2xl:py[10vh] items-center opacity-0 ' + (animationRight ? 'animate-slide-in-right' : 'animate-slide-in-left')}>
                <BiSolidQuoteAltRight className='text-brun-contrast size-16 md:size-24 lg:size-28 xl:size-36'/>
                <div className="flex flex-row gap-10">
                    <button onClick={goToPrevious} className="">
                        <FaAngleLeft />
                    </button>
                    <div className="flex flex-col items-center">
                        <p className='italic font-light text-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 5xl:text-6xl'>{testimonials[index].text}</p>
                        <p className='text-beige-contrast font-light pt-2 lg:pt-6 2xl:pt-10'>{testimonials[index].author}</p>
                        <div className='flex flex-row text-beige-contrast/90'>
                            {
                                Array.from({length: 5}).map((_, i) => {
                                    const fullStars = Math.floor(testimonials[index].rating);
                                    const halfStar = testimonials[index].rating % 1 >= 0.5

                                    if (i < fullStars) return <FaStar key={i}/>;
                                    if (i === fullStars && halfStar) return <FaStarHalf key={i}/>;
                                    return <></>;
                                })
                            }
                        </div>
                    </div>
                    <button onClick={goToNext} className="">
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Avis;

// Gerer le changement de taille de l'element qui fait "poussent" les autres elements 