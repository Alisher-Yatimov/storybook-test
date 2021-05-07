import {Story, Meta} from '@storybook/react';
import {InputButton, Props} from './InputButton';
export default {
    title: 'component/inputButton',
    component: InputButton,
} as Meta

const Template: Story<Props> = (args) => <InputButton {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    submitHandler: (msg:string) => alert(msg)
};

export const CustomMsg = Template.bind({});
CustomMsg.args = {
    submitHandler: (msg:string) => alert(`your message: ${msg}`)
}
