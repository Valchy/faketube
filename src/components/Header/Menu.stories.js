import Menu from './Menu';

export default {
	title: 'Faketube/Menu',
	component: <Menu />,
	argTypes: {
		darkMode: {
			name: 'Switch between light and dark mode'
		}
	}
};

const Template = args => {
	return <Menu {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	darkMode: true
};
