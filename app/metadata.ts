import { Metadata } from 'next';
import { PullState } from './components/PullState/PullState';
import { Dictionary } from './components/PullState/Dictionary';

const lang = PullState.useState((state) => state.lang);

export const metadata: Metadata = {
    title: "SIFOX Technologies",
    description: Dictionary[lang]["description"],
};
