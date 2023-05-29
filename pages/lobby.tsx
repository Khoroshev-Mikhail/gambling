import Header from "@/Components/Header";
import Link from "next/link";
import Image from "next/image";
import one from '../public/images/lobby/royal_coins.png'
import two from '../public/images/lobby/win_cash.png'
import three from '../public/images/lobby/hot_n_spicy.png'
import four from '../public/images/lobby/7_n_hot_fruits.png'
import five from '../public/images/lobby/lucky_lady_moon.png'
import Lock from "@/Components/lobby/lock";

export default function Lobby(){
    return(
        <div className="relative flex flex-col min-h-screen">
            <div className="absolute w-full h-full bg-[url('/images/bg-main.png')] bg-no-repeat bg-cover">
                
            </div>
            <div className="relative">
            <Header />
                <div className="flex-grow flex gap-x-5 px-10 pt-12 pb-16 ">
                    <Link href={'/royal_coins'} className="block relative overflow-hidden">
                        <Image src={one} alt="Royal Coins" />
                    </Link>
                    <Link href={'/win_cash'} className="block relative">
                        <Image src={two} alt="Win Cash" />
                    </Link>
                    <Link href={'#'} className="block relative">
                        <Image src={three} alt="Hot & Spicy" />
                        <Lock />
                    </Link>
                    <Link href={'#'} className="block relative">
                        <Image src={four} alt="7 * hot fruits" />
                        <Lock />
                    </Link>
                    <Link href={'#'} className="block relative">
                        <Image src={five} alt="Lucky lady moon" />
                        <Lock />
                    </Link>
                </div>
            </div>
            
        </div>
    )
}