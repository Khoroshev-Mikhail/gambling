import Image from "next/image";
import lock from '../../public/images/lobby/lock.png'

export default function Lock(){
    return(
        <div className="h-full w-full ">
            <div className="h-[96%] w-full absolute inset-0 bg-black opacity-50 rounded-[12px]">
                {/* Затемнение с помощью фона */}
            </div>
            <Image src={lock} width={50} alt="Lock" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 "/>
        </div>
    )
}