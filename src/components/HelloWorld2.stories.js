import React from 'react';

import { HelloWorld2 } from './HelloWorld2';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Example/HelloWorld2',
    component: HelloWorld2,
    argTypes: {
        name: 'John',
    },
};

const Template = (args) => <HelloWorld2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'John'
};

export const Secondary = Template.bind({});
Secondary.args = {
    name: 'Johnathan',
};
