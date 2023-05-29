import Image from "next/image";
import star from '../public/images/star.png'
import gold from '../public/images/gold.png'
import arrow from '../public/images/arrow-left.svg'
import Link from "next/link";

export default function Header({ back }: {back?: boolean} ){
    return(
        <div className="h-14 _bg-header px-8 py-1.6 flex flex-col justify-center border-b-[2px] border-_purple">

            <div className="relative flex justify-evenly">
            {back && 
                <Link href={'/lobby'} className="relative flex w-[42px] h-[42px] rounded-[50%] _footer-button">
                    <div className="absolute top-[13px] left-[12px]">
                        <Image src={arrow} alt="back" className=""/>
                    </div>
                </Link>
            }
                <div className="relative h-[36px] w-[261px] bg-[#370063] rounded-[18.5px] _header-shadow flex flex-col justify-center">
                    <Image src={star} alt="start" width={48} height={48} className="absolute top-[-8px] left-[-6px]"/>
                    <p className="w-full text-center block _header-text text-[20px] leading-[24px] tracking-wider">500/9000</p>
                </div>
                <div className="relative h-[36px] w-[212px] bg-[#370063] rounded-[18.5px] _header-shadow flex flex-col justify-center" >
                    <Image src={gold} alt="gold" width={39} height={27} className="absolute top-[7px] left-[8px] "/>
                    <p className="w-full text-center block _header_gold text-[20px] leading-[24px] tracking-wider _header-gold">9553215</p>
                </div>
            </div>
        </div>
    )
}