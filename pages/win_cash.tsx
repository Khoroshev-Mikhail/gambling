import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import pick1 from '../public/images/win_cash/pick_1.png'
import pick2 from '../public/images/win_cash/pick_2.png'
import pick3 from '../public/images/win_cash/pick_3.png'
import pick4 from '../public/images/win_cash/pick_4.png'
import pick5 from '../public/images/win_cash/pick_5.png'
import pick6 from '../public/images/win_cash/pick_6.png'

export default function Win_Cash(){
    return (
        <div className="relative flex flex-col min-h-screen">
            <Header back/>
            <div className="flex-grow w-auto flex justify-center py-2 bg-[url('/images/win_cash/bg-win_cash.png')] bg-no-repeat bg-cover ">
                <div className="p-5 flex justify-between gap-x-6">
                    <div className="flex flex-col justify-between w-[163px]">
                        <Image src={pick1} alt="pick"/>
                        <Image src={pick2} alt="pick"/>
                        <Image src={pick3} alt="pick"/>
                    </div>
                    <div className="flex flex-col justify-between w-[163px]">
                        <Image src={pick1} alt="pick"/>
                        <Image src={pick2} alt="pick"/>
                        <Image src={pick3} alt="pick"/>
                    </div>
                    <div className="flex flex-col justify-between w-[163px]">
                        <Image src={pick1} alt="pick"/>
                        <Image src={pick2} alt="pick"/>
                        <Image src={pick3} alt="pick"/>
                    </div>
                    <div className="flex flex-col justify-between w-[163px]">
                        <Image src={pick4} alt="pick"/>
                        <Image src={pick5} alt="pick"/>
                        <Image src={pick6} alt="pick"/>
                    </div>
                    <div className="flex flex-col justify-between w-[163px]">
                        <Image src={pick4} alt="pick"/>
                        <Image src={pick5} alt="pick"/>
                        <Image src={pick6} alt="pick"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}