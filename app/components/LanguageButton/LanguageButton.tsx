import { PullState } from "../PullState/PullState";
import "./LanguageButton.scss";

export default function LanguageButton() {
  const lang = PullState.useState((state) => state.lang);

  return (
    <div className="language-button">
      <button
        onClick={() => {
          PullState.update((state) => {
            state.lang = "en";
          });
        }}
      >
        En
      </button>
      <button
        onClick={() => {
          PullState.update((state) => {
            state.lang = "fr";
          });
        }}
      >
        Fr
      </button>
    </div>
  );
}
