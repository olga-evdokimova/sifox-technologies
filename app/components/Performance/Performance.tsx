import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import Title from "../Title/Title";
import Image from "next/image";
import { text } from "stream/consumers";

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

      num: "1,2",
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
    <div className="container">
      <div className=" pb-[50px] tablet:pb-[30px] pt-[150px] tablet:pt-[50px]">
        <Title>Platform performance</Title>
      </div>
      <div className="grid grid-cols-4 tablet:grid-cols-2">
        {items.map((item, index) => (
          <div
            className="relative flex items-center justify-center w-full h-auto"
            key={index}
          >
            <div className="absolute flex flex-col items-center">
              <div className="text-[45px] font-semibold text-center">
                {item.num}
                {item.text_num}
              </div>
              <div className="w-[180px] text-center pt-[15px] h-[50px]">{item.text}</div>
            </div>

            <Image
              src={item.src}
              alt="color"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
