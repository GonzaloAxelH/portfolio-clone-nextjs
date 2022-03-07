import React from "react";

import UpdatesFrom from "../components/UpdatesForm/UpdatesFrom";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/UpdatesFrom",
  component: UpdatesFrom,
};


const Template = (args) => <UpdatesFrom {...args} />;

export const Primary = Template.bind({});
