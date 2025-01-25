import Title from "../Title/Title";
import "./Platform.scss";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function Platform() {
  const lang = PullState.useState((state) => state.lang);
  const data = [
    {
      title: Dictionary[lang]["unique_mobile"],
      year2023: {
        value: "527m",
        rate: "44% " + Dictionary[lang]["penetration_rate"],
      },
      year2030: {
        value: "751m",
        rate: "54% " + Dictionary[lang]["penetration_rate"],
      },
      cagr: Dictionary[lang]["CAGR"],
      num: "4.5%",
      description: Dictionary[lang]["by_the_end_of_2023"],
    },
    {
      title: Dictionary[lang]["mobile_internet_users"],
      year2023: {
        value: "320m",
        rate: "27% " + Dictionary[lang]["penetration_rate"],
      },
      year2030: {
        value: "518m",
        rate: "37% " + Dictionary[lang]["penetration_rate"],
      },
      cagr: "CAGR 2023–2030",
      num: "6.2%",
      description: Dictionary[lang]["mobile_internet_penetration"],
    },
    {
      title: Dictionary[lang]["operator_revenues"],
      year2023: {
        value: "$38bn",
        rate: Dictionary[lang]["total_revenues"],
      },
      year2030: {
        value: "$61bn",
        rate: Dictionary[lang]["total_revenues"],
      },
      cagr: Dictionary[lang]["operator_capex"],
      num: "$62bn",
      description: Dictionary[lang]["mobile_revenues_have"],
    },
    {
      title: Dictionary[lang]["smartphones"],
      year2023: {
        value: "51%",
        rate: Dictionary[lang]["percentage_of_connections"],
      },
      year2030: {
        value: "81%",
        rate: Dictionary[lang]["percentage_of_connections"],
      },
      cagr: "",
      num: "",
      description: Dictionary[lang]["by_the_end_of_2030_smartphone"],
    },
    {
      title: "4G",
      year2023: {
        value: "31%",
        rate: Dictionary[lang]["percentage_of_connections"],
      },
      year2030: {
        value: "50%",
        rate: Dictionary[lang]["percentage_of_connections"],
      },
      cagr: "",
      num: "",
      description: Dictionary[lang]["by_the_end_of_the_decade"],
    },
    {
      title: Dictionary[lang]["mobile_data_consumption"],
      year2023: {
        value: "31%",
        rate: Dictionary[lang]["per_connection_per_month"],
      },
      year2030: {
        value: "50%",
        rate: Dictionary[lang]["per_connection_per_month"],
      },
      cagr: "",
      num: "",
      description: Dictionary[lang]["mobile_data_traffic_will_grow"],
    },
  ];
  return (
    <section className="platform container">
      <div className="grid grid-cols-auto-fill gap-[30px] max-[580px]:flex">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col ">
            <div
              className="bg-[var(--color-text-white)] text-[#171421] text-[20px] mobile:text-[16px] font-bold text-center px-[10px] 
              pt-[20px] mobile:pt-[10px] pb-[35px] mobile:pb-[25px] rounded-t-[20px]"
            >
              {item.title}
            </div>
            <div className="bg-[#171421] rounded-[20px] mt-[-15px] flex flex-col h-full">
              <div className="p-[30px] flex">
                <div
                  className="bg-[var(--color-text-white)] text-[var(--color-accent)] font-semibold 
                  text-[20px] mobile:text-[14px] rounded-[10px] px-[10px] flex items-center h-[34px] mobile:h-[27px]"
                >
                  2023
                </div>
                <div className="pl-[30px]">
                  <div className="text-[50px] font-semibold">
                    {item.year2023.value}
                  </div>
                  <div className="opacity-50">{item.year2023.rate}</div>
                </div>
              </div>
              <div className="p-[30px] flex">
                <div
                  className="bg-[var(--color-accent)] text-[var(--color-text-white)] font-semibold 
                  text-[20px] mobile:text-[14px] rounded-[10px] px-[10px] flex items-center h-[34px] mobile:h-[27px]"
                >
                  2030
                </div>
                <div className="pl-[30px] text-[var(--color-accent)]">
                  <div className="text-[50px] font-semibold">
                    {item.year2030.value}
                  </div>
                  <div>{item.year2030.rate}</div>
                </div>
              </div>
              {item.cagr && item.num && (
                <div className="my-[10px] mx-[30px] p-[10px] bg-white/[.05] rounded-[20px] flex items-center justify-between">
                  <div
                    className={`bg-[var(--color-text-white)] text-[#171421] font-bold px-[15px] mobile:px-[10px] h-[50px] mobile:h-[40px] flex items-center rounded-[10px] ${
                      item.cagr.split(" ").length > 5
                        ? "text-[16px] mobile:text-[12px]"
                        : "text-[20px] mobile:text-[14px] "
                    }`}
                  >
                    {item.cagr}
                  </div>
                  <div className="text-[40px] mobile:text-[30px] font-semibold pl-[20px] ">
                    {item.num}
                  </div>
                </div>
              )}
              <div className="p-[30px] mt-auto">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
