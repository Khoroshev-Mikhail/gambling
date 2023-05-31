import { motion } from "framer-motion"
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import pick1 from '/public/images/royal_coins/pick1.png';
import pick2 from '/public/images/royal_coins/pick2.png';
import pick3 from '/public/images/royal_coins/pick3.png';
import pick4 from '/public/images/royal_coins/pick4.png';
import pick5 from '/public/images/royal_coins/pick5.png';
import pick6 from '/public/images/royal_coins/pick6.png';
import pick7 from '/public/images/royal_coins/pick7.png';
import pick8 from '/public/images/royal_coins/pick8.png';
import pick9 from '/public/images/royal_coins/pick9.png';
import { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { decrement, increment, incrementStars } from "@/app/store";

const images = [ pick1, pick2, pick3, pick4, pick5, pick6, pick7, pick8, pick9 ];

export default function Royal_Coins(){
    const dispatch = useAppDispatch()
    const rate = useAppSelector(state => state.rate)
    const money = useAppSelector(state => state.money)
    
    const main = useRef<HTMLDivElement>(null)

    const [imgHeightPx, setImgHeightPx] = useState(162);
    const [isFirstMount, setIsFirstMount] = useState<boolean>(true)
    const [isAuto, setIsAuto] = useState<boolean>(false)
    const [winner, setWinner] = useState<number | null>(null)
    const [fixHeight, setFixHeight] = useState<null | number>(null)

    const [y1, setY1] = useState<number>(0)
    const [y2, setY2] = useState<number>(0)
    const [y3, setY3] = useState<number>(0)
    const [random1, setRandom1] = useState<number>(0)
    const [random2, setRandom2] = useState<number>(0)
    const [random3, setRandom3] = useState<number>(0)
    const [reel1, setReel1] = useState<StaticImageData[]>(images.slice(0, 3)) //перемешай
    const [reel2, setReel2] = useState<StaticImageData[]>(images.slice(3, 6)) //перемешай
    const [reel3, setReel3] = useState<StaticImageData[]>(images.slice(6, 9)) //перемешай

    useEffect(()=>{
        if (isFirstMount) {
            setIsFirstMount(false);
        } else {
            setY1(y => y - imgHeightPx * random1)
        }
      }, [reel1])
    useEffect(()=>{
        if (isFirstMount) {
            setIsFirstMount(false); 
        } else {
            setY2(y => y - imgHeightPx * random2)
        }
    }, [reel2])
    useEffect(()=>{
        if (isFirstMount) {
            setIsFirstMount(false);
        } else {
            setY3(y => y - imgHeightPx * random3)
        }
    }, [reel3])

    //Победа
    useEffect(()=>{
        if(!isFirstMount){
            if(reel1.length > 3 && reel1[reel1.length - 2] === reel2[reel2.length - 2] && reel1[reel1.length - 2] === reel3[reel3.length - 2]){
                setWinner(rate * 5)
                dispatch(increment(rate * 5))
            }
        }
    }, [reel1, reel2, reel3])
    useEffect(()=>{
        if(winner){
            setTimeout(()=>setWinner(null), 5000)
        }
    }, [winner])

    //Spin
    const handler = () => {
        dispatch(decrement(rate))
        dispatch(incrementStars(100))

        const r1 = Math.floor(Math.random() * 11) + 10
        const r2 = Math.floor(Math.random() * 11) + 10
        const r3 = Math.floor(Math.random() * 11) + 10

        setRandom1(r1)
        setRandom2(r2)
        setRandom3(r3)

        const arr1: StaticImageData[] = []
        const arr2: StaticImageData[] = []
        const arr3: StaticImageData[] = []

        for(let i = 0; i < r1; i ++){
            const randomIndex = Math.floor(Math.random() * images.length)
            arr1.push(images[randomIndex])
        }
        for(let i = 0; i < r2; i ++){
            const randomIndex = Math.floor(Math.random() * images.length)
            arr2.push(images[randomIndex])
        }
        for(let i = 0; i < r3; i ++){
            const randomIndex = Math.floor(Math.random() * images.length)
            arr3.push(images[randomIndex])
        }

        setReel1(state => state.concat(arr1))
        setReel2(state => state.concat(arr2))
        setReel3(state => state.concat(arr3))
    }
    
    //Auto
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null
    
        if (isAuto) {
            interval = setInterval(handler, 1000)
        }
        if(rate > money){
            if (interval) {
                clearInterval(interval)
            }
        }
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [isAuto, money, rate])

    useEffect(()=>{
        if(main.current){
            const h = main.current.getBoundingClientRect().height
            setImgHeightPx(h)
        }
        if(fixHeight === null && main.current){
            setFixHeight(main.current.getBoundingClientRect().height * 3)
        }

    }, [main])
      

    return (
        <div className="relative min-h-screen max-h-screen">
            <div className="absolute w-full h-full bg-[url('/images/royal_coins/bg-royal_coins.png')] bg-no-repeat bg-cover">
            
            </div>
            <div className="relative flex flex-col min-h-screen max-h-screen">
                <Header back/>

                <div className="flex-grow w-full flex justify-center py-2 px-2 overflow-hidden">
     
                    <div className="w-auto flex flex-col justify-center relative">
                        <div className={`w-auto overflow-hidden flex justify-around rounded-[20px] border-[1px] border-[#FFE600]  bg-black bg-opacity-75`}>
                            
                            <motion.div className="flex flex-col justify-between" animate={{y: y1}} transition={{ duration: 1, type: 'tween' }}>
                                {reel1.map((el, i) => {
                                    return (
                                        <div ref={main} key={i} className="flex flex-col justify-center h-1/3 py-1 sm:py-2 lg:py-3">
                                            <img src={el.src} alt="pick" className="h-full block my-2"/>
                                        </div>
                                    )
                                })}
                            </motion.div>

                            <motion.div className="flex flex-col justify-between" animate={{y: y2}} transition={{ duration: 1, type: 'tween' }}>
                                {reel2.map((el, i) => {
                                    return (
                                        <div key={i} className="flex flex-col justify-center h-1/3 py-1 sm:py-2 lg:py-3">
                                            <img src={el.src} alt="pick" className="h-full block my-2"/>
                                        </div>
                                    )
                                })}
                            </motion.div>

                            <motion.div className="flex flex-col justify-between" animate={{y: y3}} transition={{ duration: 1, type: 'tween' }}>
                                {reel3.map((el, i) => {
                                    return (
                                        <div key={i} className="flex flex-col justify-center h-1/3 py-1 sm:py-2 lg:py-3">
                                            <img src={el.src} alt="pick" className="h-full block my-2"/>
                                        </div>
                                    )
                                })}
                            </motion.div>

                        </div>
                    </div>
                </div>

                <Footer spinHandler={handler} winner={winner} isAuto={isAuto} setIsAuto={setIsAuto} />
            </div>
        </div>
    )
}