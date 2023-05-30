import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { decrementRate, incrementRate } from "@/app/store"

export default function Footer({ spinHandler, winner, isAuto, setIsAuto }: { spinHandler?: any, winner?: number | null, isAuto?: boolean, setIsAuto?: any}){
    const rate = useAppSelector(state => state.rate)
    const money = useAppSelector(state => state.money)
    const dispatch = useAppDispatch()

    const decrement = () =>dispatch(decrementRate(5000))
    const increment = () =>dispatch(incrementRate(5000))

    return(
        <div className="mt-auto h-14 _bg-header px-1 py-1 sm:px-8 flex flex-col justify-center uppercase border-b-[2px] border-_purple">

            <div className="flex justify-between sm:justify-evenly">
                <div className="flex gap-x-[1px] sm:gap-x-[13px]">
                    <button className="w-[42px] h-[42px] rounded-[50%] _footer-button _footer-button-rate" onClick={decrement}>
                        -
                    </button>
                    <div className="h-full w-[60px] xs:w-[86px] bg-[#370063] rounded-[10px] _header-shadow flex flex-col justify-center">
                        <p className=" _footer-text w-full text-center block _header-text text-[14px] xs:text-[20px] leading-[24px] tracking-wider">{rate}</p>
                    </div>
                    <button className="w-[42px] h-[42px] rounded-[50%] _footer-button _footer-button-rate" onClick={increment}>
                        +
                    </button>
                </div>

                <div className="relative h-full w-[100px] xs:w-[189px] bg-[#370063] rounded-[10px] _header-shadow flex flex-col justify-center">
                    <div className="_animate-blink flex flex-col xs:flex-row justify-between px-3 min-h-[42px]">
                        <p className="w-full text-center xs:text-left block _header-text text-[20px] leading-[20px] xs:leading-[40px] _footer-button-auto-text tracking-wider uppercase">
                            { winner && winner > 0 && 'win' }
                        </p>
                        <p className="w-full text-center xs:text-right block _header-text text-[20px] leading-[20px] xs:leading-[40px] _footer-text tracking-wider">
                            { winner && winner }
                        </p>
                    </div>
                </div>

                <div className="flex gap-x-2.5">
                    <button className="_footer-button-auto rounded-[11px] w-[40px] sm:w-[99px] h-full" onClick={()=>setIsAuto(!isAuto)} disabled={rate > money}>
                        <div className="flex flex-col justify-center">
                            <span className={`_footer-button-auto-text  text-[14px] sm:text-[20px] tracking-wider uppercase ${rate < money && isAuto && '_animate-blink'} `}  >
                                auto
                            </span>
                        </div>
                    </button>
                    <button className="_footer-button-spin rounded-[11px] w-[40px] sm:w-[99px] h-full" onClick={spinHandler} disabled={rate > money}>
                        <div className="flex flex-col justify-center">
                            <span className="_footer-button-spin-text text-[14px] sm:text-[20px] tracking-wider uppercase">
                                spin
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}