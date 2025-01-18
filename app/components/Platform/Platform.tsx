import Title from "../Title/Title";
import "./Platform.scss";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function Platform() {
  const lang = PullState.useState((state) => state.lang);
  const data = [
    {
      title: Dictionary[lang]["you_must_agree_to_the_privacy_policy"],
      year2023: {
        value: "527m",
        rate: "44% penetration rate*",
      },
      year2030: {
        value: "751m",
        rate: "53% penetration rate*",
      },
      cagr: "CAGR 2023–2030",
      num: "4.5%",
      description:
        "By the end of 2023, nearly 44% of the population in Sub-Saharan Africa subscribed to a mobile service, amounting to 527 million subscribers.",
    },
    {
      title: "Unique mobile subscribers",
      year2023: {
        value: "527m",
        rate: "44% penetration rate*",
      },
      year2030: {
        value: "751m",
        rate: "53% penetration rate*",
      },
      cagr: "CAGR 2023–2030",
      num: "4.5%",
      description:
        "Mobile internet penetration has been growing, reaching 27% in the region by the end of 2023.",
    },
    {
      title: "Unique mobile subscribers",
      year2023: {
        value: "527m",
        rate: "44% penetration rate*",
      },
      year2030: {
        value: "751m",
        rate: "53% penetration rate*",
      },
      cagr: "Operator capex for the period 2023–2020",
      num: "4.5%",
      description:
        "Mobile revenues have been growing steadily in the region. Growth is being driven by the expansion of 4G and 5G networks, the rise in the use of mobile data, and the growing adoption of technologies such as IoT. Annual mobile revenue growth is expected to stay in positive territory through to 2030.",
    },
    {
      title: "Unique mobile subscribers",
      year2023: {
        value: "527m",
        rate: "44% penetration rate*",
      },
      year2030: {
        value: "751m",
        rate: "53% penetration rate*",
      },
      cagr: "",
      num: "4.5%",
      description:
        "By the end of 2030 smartphone adoption in the region will grow to 81% of the total connections contributing to an increase of mobile data traffic consumption.",
    },
    {
      title: "Unique mobile subscribers",
      year2023: {
        value: "527m",
        rate: "44% penetration rate*",
      },
      year2030: {
        value: "751m",
        rate: "53% penetration rate*",
      },
      cagr: "",
      num: "4.5%",
      description:
        "By the end of the decade, 4G adoption in Sub-Saharan Africa is expected to reach 50%, making it the dominant technology.",
    },
    {
      title: "Unique mobile subscribers",
      year2023: {
        value: "527m",
        rate: "44% penetration rate*",
      },
      year2030: {
        value: "751m",
        rate: "53% penetration rate*",
      },
      cagr: "",
      num: "4.5%",
      description:
        "Mobile data traffic will grow by almost 6 GB per connection, per month in Sub-Saharan Africa between 2023 and 2030.",
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
