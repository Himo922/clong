// YourComponent.stories.js|jsx

import { Card } from "../../components/Card";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Card {...args} />;

export const Large = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
