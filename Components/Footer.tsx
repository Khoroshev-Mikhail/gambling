import Image from "next/image";
import star from '../public/images/star.png'
import gold from '../public/images/gold.png'

export default function Footer(){
    return(
        <div className="mt-auto h-14 _bg-header px-8 flex flex-col justify-center uppercase border-b-[2px] border-_purple">
            <div className="flex justify-evenly">
                <div className="flex gap-x-[13px]">
                    <button className="w-[42px] h-[42px] rounded-[50%] _footer-button">
                        -
                    </button>
                    <div className="h-full w-[86px] bg-[#370063] rounded-[10px] _header-shadow flex flex-col justify-center">
                        <p className=" _footer-text w-full text-center block _header-text text-[20px] leading-[24px] tracking-wider">50000</p>
                    </div>
                    <button className="w-[42px] h-[42px] rounded-[50%] _footer-button">
                        +
                    </button>
                </div>

                <div className="relative h-full w-[189px] bg-[#370063] rounded-[10px] _header-shadow flex flex-col justify-center">
                    <div className="flex justify-between px-3">
                        <p className="w-full text-left block _header-text text-[20px] leading-[24px] _footer-button-auto-text tracking-wider uppercase">win</p>
                        <p className="w-full text-right block _header-text text-[20px] leading-[24px] _footer-text tracking-wider">9000,999</p>
                    </div>
                </div>

                <div className="flex gap-x-2.5">
                    <button className="_footer-button-auto rounded-[11px] w-[99px] h-full">
                        <div className="flex flex-col justify-center">
                            <span className="_footer-button-auto-text text-[20px] tracking-wider uppercase">auto</span>
                        </div>
                    </button>
                    <button className="_footer-button-spin rounded-[11px] w-[99px] h-full">
                        <div className="flex flex-col justify-center">
                            <span className="_footer-button-spin-text text-[20px] tracking-wider uppercase">spin</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}