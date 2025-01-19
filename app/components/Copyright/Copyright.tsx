import { PullState } from "../../components/PullState/PullState";
import { Dictionary } from "../../components/PullState/Dictionary";
export default function Copyright() {
  const currentYear = new Date().getFullYear();
  const lang = PullState.useState((state) => state.lang);
  return (
    <p className="footer__copyright">
      {Dictionary[lang]["copyright"]}. SIFOX Technologies | {currentYear}
    </p>
  );
}
     