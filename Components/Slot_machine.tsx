import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
//Получить рандом i например 17
//заппендить 17 рандомных картинок по рандомному индексу
//прокрутить вниз родительский блок на 17 * высоту картинок за 3 - 3,3 - 3,6 сек с easy нужной чтобы замедлялась к концу
const SlotMachine = () => {
  const [digits, setDigits] = useState([1,2,3,4,5,6,7]);
  const [random, setRandom] = useState(1)
  const [y, setY] = useState(0);
  const [isFirstMount, setIsFirstMount] = useState(true);

  const handler = () => {
    var length = Math.floor(Math.random() * 21) + 1; // Генерируем случайную длину массива от 0 до 20
    var arr: number[] = [];
  
    for (var i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random() * 11); // Генерируем случайное число от 0 до 10
      arr.push(randomNumber); // Добавляем случайное число в массив
    }
    setRandom(val => length)
    setDigits(state => state.concat(arr))
  }
  useEffect(()=>{
    if (isFirstMount) {
      setIsFirstMount(false); // Устанавливаем флаг первого монтирования в false
    } else {
      setY(y => y - 50 * random);
    }
  }, [digits])
  return (
    <div>
      <div className="slot-machine h-[350px] overflow-hidden">

          <motion.div
            animate={{y}}
            transition={{ duration: 1, type: 'tween' }}
            className="digit"
          >
            {digits.map(el => <div key={el} className=' border w-[50px] h-[50px] text-[30px]'>{el}</div>)}
          </motion.div>

      </div>
      <button onClick={handler}>
        Spin
      </button>
    </div>
  );
};

export default SlotMachine;
