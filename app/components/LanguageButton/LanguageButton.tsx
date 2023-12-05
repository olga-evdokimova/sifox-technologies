import { PullState } from "../PullState/PullState";
import "./LanguageButton.scss";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function LanguageButton() {
  const lang = PullState.useState((state) => state.lang);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

   useEffect(() => {
     const savedLang = localStorage.getItem("selectedLang");
     if (savedLang) {
       PullState.update((state) => {
         state.lang = savedLang;
       });
     }
   }, []);
   const handleLanguageChange = (selectedLang: string) => {
     PullState.update((state) => {
       state.lang = selectedLang;
     });
     localStorage.setItem("selectedLang", selectedLang);
   };
  
  if (!isHomePage) {
    return null;
  }
  return (
    <div className="language-button">
      <button
        onClick={() => handleLanguageChange("en")}
        className={lang === "en" ? "active" : ""}
      >
        En
      </button>
      <button
        onClick={() => handleLanguageChange("fr")}
        className={lang === "fr" ? "active" : ""}
      >
        Fr
      </button>
    </div>
  );
}
