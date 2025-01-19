// @ts-nocheck
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import Title from "../Title/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Performance() {
  const items = [
    {
      src: "/performance/performance-01.png",
      num: "120",
      text_num: " million",
      text: "Subscribers",
    },
    {
      src: "/performance/performance-02.png",
      num: "1.2",
      text_num: " million",
      text: "Monthly Unique Users",
    },
    {
      src: "/performance/performance-01.png",
      num: "98",
      text_num: " TB",
      text: "Monthly Data Processed",
    },
    {
      src: "/performance/performance-02.png",
      num: "21",
      text_num: " million",
      text: "Successful Transactions Per Month",
    },
  ];
  return (
    <div className="container ">
      <div className="pb-[50px] tablet:pb-[30px] pt-[150px] tablet:pt-[50px]">
        <Title>Platform performance</Title>
      </div>
      <div className="grid grid-cols-4 tablet:grid-cols-2 pb-[150px] tablet:pb-[50px]">
        {items.map((item, index) => (
          <Counter key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function Counter({ item }) {
  const { ref, inView } = useInView({
    threshold: 0.1, // Срабатывает, когда 10% элемента в области видимости
  });

  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Состояние для отслеживания анимации

  useEffect(() => {
    if (inView && !hasAnimated) {
       const targetNum = parseFloat(item.num); // Преобразуем строку в число
      let start = 0;
      const duration = 2000; // Длительность анимации в миллисекундах
      const increment = targetNum / (duration / 50); // Шаг инкремента

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNum) {
          setCount(targetNum);
          setHasAnimated(true); // Устанавливаем флаг, что анимация завершена
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 100);

      return () => clearInterval(timer); // Очистка таймера при размонтировании
    }
  }, [inView, hasAnimated, item.num]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center w-full h-auto"
    >
      <div className="absolute flex flex-col items-center">
        <div className="item-text_num font-semibold text-center">
          {count}
          {item.text_num}
        </div>
        <div className="item-text text-center">
          {item.text}
        </div>
      </div>
      <Image
        src={item.src}
        alt="color"
        width={400}
        height={300}
        className="object-contain "
      />
    </div>
  );
}
