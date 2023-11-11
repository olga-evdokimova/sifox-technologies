import { Store, createPullstateCore } from "pullstate";

export const PullState = new Store({
    hexagonStyleName: "style_left",
});

export const PullStateServerSide = createPullstateCore({
    PullState
});