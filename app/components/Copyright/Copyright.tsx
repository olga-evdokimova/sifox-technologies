import { PullState } from "../../components/PullState/PullState";
import { Dictionary } from "../../components/PullState/Dictionary";
export default function Copyright() {
  const currentYear = new Date().getFullYear();
  const lang = PullState.useState((state) => state.lang);
  return (
    <p className="footer__copyright">
      {Dictionary[lang]["copyright"]} &copy; SIFOX Technologies. {Dictionary[lang]["all_rights_reserved"]} | {currentYear}
    </p>
  );
}
