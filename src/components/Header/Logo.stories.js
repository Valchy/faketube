import Logo from './Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Faketube/Logo',
	component: Logo,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		text: 'Faketube'
	}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Logo {...args} />;

export const Primary = Template.bind({});
