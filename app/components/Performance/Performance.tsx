// @ts-nocheck
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import Title from "../Title/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { title } from "process";

export default function Performance() {
  const lang = PullState.useState((state) => state.lang);
  const items = [
    {
      src: "/performance/performance-01.png",
      num: "120",
      text_num: Dictionary[lang]["million"],
      text: Dictionary[lang]["subscribers"],
    },
    {
      src: "/performance/performance-02.png",
      num: "1.2",
      text_num: " million",
      text: Dictionary[lang]["monthly_unique_users"],
    },
    {
      src: "/performance/performance-01.png",
      num: "98",
      text_num: Dictionary[lang]["TB"],
      text: Dictionary[lang]["monthly_data_processed"],
    },
    {
      src: "/performance/performance-02.png",
      num: "21",
      text_num: Dictionary[lang]["million"],
      text: Dictionary[lang]["successful_transactions_per_month"],
    },
  ];
  return (
    <div className="container ">
      <div className="pb-[50px] tablet:pb-[30px] pt-[150px] tablet:pt-[50px]">
        <Title>{Dictionary[lang]["performance"]}</Title>
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
    threshold: 0.1,
  });

  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const targetNum = parseFloat(item.num); 
      let start = 0;
      const duration = 2000; 
      const increment = item.num.includes(".") 
        ? targetNum / (duration / 100) 
        : Math.ceil(targetNum / (duration / 100)); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNum) {
          setCount(item.num.includes(".") ? targetNum.toFixed(1) : targetNum); 
          setHasAnimated(true);
          clearInterval(timer);
        } else {
          setCount(
            item.num.includes(".") ? start.toFixed(1) : Math.floor(start) 
          );
        }
      }, 100);

      return () => clearInterval(timer); 
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
        <div className="item-text text-center">{item.text}</div>
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



// function Counter({ item }) {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//   });

//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     if (inView && !hasAnimated) {
//        const targetNum = parseFloat(item.num); 
//       let start = 0;
//       const duration = 2000; 
//       const increment = targetNum / (duration / 100); 

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= targetNum) {
//           setCount(targetNum);
//           setHasAnimated(true); 
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 100);

//       return () => clearInterval(timer); 
//     }
//   }, [inView, hasAnimated, item.num]);

//   return (
//     <div
//       ref={ref}
//       className="relative flex items-center justify-center w-full h-auto"
//     >
//       <div className="absolute flex flex-col items-center">
//         <div className="item-text_num font-semibold text-center">
//           {count}
//           {item.text_num}
//         </div>
//         <div className="item-text text-center">
//           {item.text}
//         </div>
//       </div>
//       <Image
//         src={item.src}
//         alt="color"
//         width={400}
//         height={300}
//         className="object-contain "
//       />
//     </div>
//   );
// }