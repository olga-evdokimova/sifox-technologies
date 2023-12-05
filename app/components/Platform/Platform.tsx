import Title from "../Title/Title";
import "./Platform.scss";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function Platform() {
  const lang = PullState.useState((state) => state.lang);
  return (
    <section className="platform container">
      <div className="platform__wrap">
        <div className="platform__card">
          <Title>50%</Title>
          <p className="platform__card-text">
            {Dictionary[lang]["mobile_penetration"]}
          </p>
        </div>
        <div className="platform__card">
          <Title>88%</Title>
          <p className="platform__card-text">{Dictionary[lang]["by_2030"]}</p>
        </div>
        <div className="platform__card">
          <Title>19 {Dictionary[lang]["gb"]}</Title>
          <p className="platform__card-text">
            {Dictionary[lang]["mobile_data"]}
          </p>
        </div>
        <div className="platform__card">
          <Title>692 {Dictionary[lang]["million"]}</Title>
          <p className="platform__card-text">
            {Dictionary[lang]["the_total_number"]}
          </p>
        </div>
        <div className="platform__card">
          <Title>$58 {Dictionary[lang]["billion"]}</Title>
          <p className="platform__card-text">
            {Dictionary[lang]["mobile_operator"]}
          </p>
        </div>
      </div>
      <span className="platform__source">Source: GSMA</span>
    </section>
  );
}
