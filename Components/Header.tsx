import Image from "next/image";
import star from '../public/images/star.png'
import gold from '../public/images/gold.png'
import arrow from '../public/images/arrow-left.svg'
import Link from "next/link";
import { useAppSelector } from "@/app/hooks";

export default function Header({ back }: {back?: boolean} ){
    const money = useAppSelector(state => state.money)
    const stars = useAppSelector(state => state.stars)
    return(
        <div className="h-14 _bg-header px-1 md:px-8 py-1.5 flex flex-col justify-center border-b-[2px] border-_purple">

            <div className="relative flex justify-between md:justify-evenly">
            {back && 
                <Link href={'/lobby'} className="relative flex left-0 w-[42px] h-[42px] rounded-[50%] _footer-button">
                    <div className="absolute top-[13px] left-[13px]">
                        <Image src={arrow} alt="back" className=""/>
                    </div>
                </Link>
            }
                <div className="w-[140px] xs:w-[200px] sm:w-[261px] flex flex-col justify-center">
                    <div className="pl-10 relative w-full h-[36px] flex flex-col justify-center bg-[#370063] rounded-[18.5px] _header-shadow">
                        <Image src={star} alt="start" width={48} height={48} className="absolute top-[-8px] left-[-6px]"/>
                        <p className="w-full text-center block _header-text text-[14px] xs:text-[20px] leading-[24px] tracking-wider">{stars}/9000</p>
                    </div>
                </div>
                <div className="w-[150px] xs:w-[212px] pl-2 flex flex-col justify-center" >
                    <div className="pl-10 relative w-full h-[36px] flex flex-col justify-center  bg-[#370063] rounded-[18.5px] _header-shadow">
                        <Image src={gold} alt="gold" width={39} height={27} className="absolute top-[7px] left-[8px] "/>
                        <p className="w-full text-center block _header_gold text-[14px] xs:text-[20px] leading-[24px] tracking-wider _header-gold">{money}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}