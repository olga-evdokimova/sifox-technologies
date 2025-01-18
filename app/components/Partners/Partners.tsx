import { Dictionary } from "../PullState/Dictionary";
import { PullState } from "../PullState/PullState";
import Title from "../Title/Title";
import Image from "next/image";
export default function Partners() {
  const lang = PullState.useState((state) => state.lang);

  const partners = [
    {
      src: "/partners/Globacom Limited.png",
      alt: "logo Globacom Limited",
    },
    { src: "/partners/Safaricom.png", alt: "logo Safaricom" },
    { src: "/partners/Orange.png", alt: "logo Orange" },
    { src: "/partners/Airtel_Uganda.png", alt: "logo Airtel Uganda" },
    {
      src: "/partners/Telkom_Kenya.png",
      alt: "logo Telkom Kenya",
    },
    { src: "/partners/muni.png", alt: "logo muni-hd@3" },
    { src: "/partners/Econet.png", alt: "logo Econet" },
    { src: "/partners/And others.png", alt: "logo And others" },
  ];

  return (
    <div className="">
      <div className="max-w-[1450px] m-auto pb-[50px] tablet:pb-[30px] pt-[150px] tablet:pt-[50px] px-[20px]">
        <Title>Partners</Title>
      </div>
      <div className="max-w-[1600px] m-auto grid grid-cols-4 tablet:grid-cols-2">
        {partners.map((partner, index) => (
          <div
            className="relative flex items-center justify-center w-full h-auto"
            key={index}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
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
