import React from "react";

import Publishings from "../components/Publishings/Publishings";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Publishings",
  component: Publishings,
};


const Template = (args) => <Publishings {...args} />;

export const Primary = Template.bind({});
