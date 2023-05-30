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
// const imgHeightPx = 162
const maxAspectRatio = 210 / 136 // = 1.544 соотношение сторон изображений, у всех разное, берется максимальное

//width всегда -16
//min-375
//maxWidth - 762
//надо чтобы влазило 3 по 3 по высоте и ширине
//высота центрального блока всегда - 56*2 - 16 = -124

//360 - 124 = 236
//800 - 16 = 784

//((width - 16) / 3 > (height - 124) * maxAspectRatio / 3) ? (height - 124) / 3 : (width - 16) / 3
 

export default function Royal_Coins(){
    const dispatch = useAppDispatch()
    const rate = useAppSelector(state => state.rate)
    const money = useAppSelector(state => state.money)
    
    const main = useRef<HTMLDivElement>(null)

    const [imgHeightPx, setImgHeightPx] = useState(162);
    const [isFirstMount, setIsFirstMount] = useState<boolean>(true)
    const [isAuto, setIsAuto] = useState<boolean>(false)
    const [winner, setWinner] = useState<number | null>(null)

    const [y1, setY1] = useState<number>(-20)
    const [y2, setY2] = useState<number>(-20)
    const [y3, setY3] = useState<number>(-20)
    const [random1, setRandom1] = useState<number>(0)
    const [random2, setRandom2] = useState<number>(0)
    const [random3, setRandom3] = useState<number>(0)
    const [reel1, setReel1] = useState<StaticImageData[]>(images.slice(0, 3)) //перемешай
    const [reel2, setReel2] = useState<StaticImageData[]>(images.slice(0, 3)) //перемешай
    const [reel3, setReel3] = useState<StaticImageData[]>(images.slice(0, 3)) //перемешай

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

    useEffect(()=>{
        if(!isFirstMount){
            // if(reel1[reel1.length - 1] === reel2[reel2.length - 1] && reel1[reel1.length - 1] === reel3[reel3.length - 1]){
                
            // }
            if(reel1.length > 3 && reel1[reel1.length - 2] === reel2[reel2.length - 2] && reel1[reel1.length - 2] === reel3[reel3.length - 2]){
                setWinner(rate * 5)
                dispatch(increment(rate * 5))
            }
            // if(reel1[reel1.length - 3] === reel2[reel2.length - 3] && reel1[reel1.length - 3] === reel3[reel3.length - 3]){

            // }
        }

    }, [reel1, reel2, reel3])

    const handler = () => {
        dispatch(decrement(rate))
        // setWinner(null)
        dispatch(incrementStars(100))

        const r1 = Math.floor(Math.random() * 11) + 10
        const r2 = Math.floor(Math.random() * 11) + 10
        const r3 = Math.floor(Math.random() * 11) + 10

        setRandom1(r => r1)
        setRandom2(r => r2)
        setRandom3(r => r3)

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
    
    useEffect(()=>{
        if(winner){
            setTimeout(()=>setWinner(null), 10000)
        }
    }, [winner])

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

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.innerWidth)
            setDeviceHeight(window.innerHeight)
        }
    
        if (typeof window !== 'undefined') {
            setDeviceWidth(window.innerWidth)
            setDeviceHeight(window.innerHeight)
            window.addEventListener('resize', handleResize)
        }
    
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize)
            }
        }   
    }, [])

    useEffect(() => {
        const handleResize = () => {
          if (main.current) {
            const w = main.current.clientWidth;
            const h = main.current.clientHeight;
            const res = w / 3 >= h * maxAspectRatio / 3 ? h / 3 : w / 3;
            setImgHeightPx(Math.floor(res));
          }
        };
      
        // Вызовите handleResize при инициализации
        handleResize();
      
        // Добавьте обработчик события resize
        window.addEventListener('resize', handleResize);
      
        // Очистите обработчик события при размонтировании компонента
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [main, maxAspectRatio]);
      

    return (
        <div className="relative min-h-screen max-h-screen">
            <div className="absolute w-full h-full bg-[url('/images/royal_coins/bg-royal_coins.png')] bg-no-repeat bg-cover">
            
            </div>
            <div className="relative flex flex-col min-h-screen max-h-screen">
                <Header back/>

                <div className="flex-grow w-full flex justify-center py-2 px-2 overflow-hidden">
     
                    <div className="w-full flex flex-col justify-center relative">
                        <div ref={main} className={`overflow-hidden  p-1 xs:p-5 flex justify-between rounded-[20px] border-[1px] border-[#FFE600] gap-x-6 gap-y-6 bg-black bg-opacity-75`}>
                    
                            <motion.div className="flex flex-col justify-between" animate={{y: y1}} transition={{ duration: 1, type: 'tween' }}>
                                {reel1.map((el, i) => {
                                    return (
                                        <div key={i} className="flex flex-col justify-center min-h-[162px]">
                                            <img src={el.src} alt="pick" className="block my-2"/>
                                        </div>
                                    )
                                })}
                            </motion.div>

                            <motion.div className="flex flex-col justify-between" animate={{y: y2}} transition={{ duration: 1, type: 'tween' }}>
                                {reel2.map((el, i) => {
                                    return (
                                        <div key={i} className="flex flex-col justify-center min-h-[162px]">
                                            <img src={el.src} alt="pick" className="block my-2"/>
                                        </div>
                                    )
                                })}
                            </motion.div>

                            <motion.div className="flex flex-col justify-between" animate={{y: y3}} transition={{ duration: 1, type: 'tween' }}>
                                {reel3.map((el, i) => {
                                    return (
                                        <div key={i} className="flex flex-col justify-center min-h-[162px]">
                                            <img src={el.src} alt="pick" className="block my-2"/>
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