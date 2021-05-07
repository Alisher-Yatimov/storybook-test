import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from './Button';

export default {
    title: '/component/Button',
    component: Button,
    argTypes: {
        color: {control: 'color'},
        children: { control: 'text'},
        size: {
            control: {type: 'select'},
            options: ['small', 'medium', 'large']
        },
        onClick: {action: 'clicked'}
    }
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    children: 'click me!',
    size: 'small'
}