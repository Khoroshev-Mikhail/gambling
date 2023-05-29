import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import pick1 from '../public/images/royal_coins/pick1.png'
import pick2 from '../public/images/royal_coins/pick2.png'
import pick3 from '../public/images/royal_coins/pick3.png'
import pick4 from '../public/images/royal_coins/pick4.png'
import pick5 from '../public/images/royal_coins/pick5.png'
import pick6 from '../public/images/royal_coins/pick6.png'
import pick7 from '../public/images/royal_coins/pick7.png'
import pick8 from '../public/images/royal_coins/pick8.png'
import pick9 from '../public/images/royal_coins/pick9.png'
import { useState } from "react";
import { motion } from "framer-motion"

const images = [ pick1, pick2, pick3, pick4, pick5, pick6, pick7, pick8, pick9 ];

export default function Royal_Coins(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <div className="relative">
            <div className="absolute w-full h-full bg-[url('/images/royal_coins/bg-royal_coins.png')] bg-no-repeat bg-cover">
            
            </div>
            <div className="relative flex flex-col min-h-screen">
                <Header back/>

                <div className=" flex-grow w-auto flex justify-center py-2 ">
                    <div className="flex flex-col justify-center">
                        <div className="overflow-hidden h-[430px] p-5 flex justify-between rounded-[20px] border-[1px] border-[#FFE600] gap-x-6 gap-y-6 bg-black bg-opacity-75">
                            
                            <div className="flex flex-col justify-between">
                                {images.map((el, i) => <motion.img key={i}  src={el.src} alt="pick" className="my-2"/>)}
                            </div>

                            <div className="flex flex-col justify-between">
                                {images.map(el => <img src={el.src} alt="pick" className="my-2"/>)}
                            </div>

                            <div className="flex flex-col justify-between">
                                {images.map(el => <img src={el.src} alt="pick" className="my-2"/>)}
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}