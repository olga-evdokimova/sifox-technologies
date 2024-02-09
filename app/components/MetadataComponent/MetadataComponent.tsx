import type { Metadata } from "next";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";

export default function MetadataComponent() {
  const lang = PullState.useState((state) => state.lang);
  const metadata: Metadata = {
    title: "SIFOX Technologies",
    description: Dictionary[lang]["description"],
  };
  return null;
}
