import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, Props } from './Input';

export default {
    title: 'component/Input',
    component: Input,
    argTypes: {
        borderColor: { control: 'color' },
        placeholder: { control: 'text' }
    }
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'tye'
}