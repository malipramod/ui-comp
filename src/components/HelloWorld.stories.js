import React from 'react';

import { HelloWorld } from './HelloWorld';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Example/HelloWorld',
    component: HelloWorld,
    parameters: {
        actions: { argTypesRegex: '^on.*' },
        docs: {
            description: {
                component: '### Some description for component(Can write MarkDown too)'
            }
        }
    }
};

const sayHello = name => alert('Hi ' + name)

const Template = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'John',
    sayHello
};

export const Secondary = Template.bind({});
Secondary.args = {
    name: 'Johnathan',
    sayHello
};
