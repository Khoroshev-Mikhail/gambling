import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import pick1 from '../public/images/royal_coins/pick1.png'
import pick2 from '../public/images/royal_coins/pick2.png'
import pick3 from '../public/images/royal_coins/pick3.png'
import pick4 from '../public/images/royal_coins/pick4.png'
import pick5 from '../public/images/royal_coins/pick5.png'
import pick6 from '../public/images/royal_coins/pick6.png'
import pick7 from '../public/images/royal_coins/pick7.png'
import pick8 from '../public/images/royal_coins/pick8.png'
import pick9 from '../public/images/royal_coins/pick9.png'

export default function Royal_Coins(){
    return (
        <div className="relative">
            <div className="absolute w-full h-full bg-[url('/images/royal_coins/bg-royal_coins.png')] bg-no-repeat bg-cover">
            
            </div>
            <div className="relative flex flex-col min-h-screen">
                <Header back/>
                <div className="flex-grow w-auto flex justify-center py-2 ">
                    <div className="p-5 flex justify-between rounded-[20px] border-[1px] border-[#FFE600] gap-x-6 bg-black bg-opacity-75">
                        <div className="flex flex-col justify-between">
                            <Image src={pick1} alt="pick"/>
                            <Image src={pick2} alt="pick"/>
                            <Image src={pick3} alt="pick"/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <Image src={pick4} alt="pick"/>
                            <Image src={pick5} alt="pick"/>
                            <Image src={pick6} alt="pick"/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <Image src={pick7} alt="pick"/>
                            <Image src={pick8} alt="pick"/>
                            <Image src={pick9} alt="pick"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}