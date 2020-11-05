import React from 'react';

import { HelloWorld } from './HelloWorld';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Example/HelloWorld',
    component: HelloWorld,
    argTypes: {
        name: 'John',
    },
};

const Template = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'John'
};

export const Secondary = Template.bind({});
Secondary.args = {
    name: 'Johnathan',
};
