import Search from './Search';

export default {
	title: 'Faketube/Search',
	component: <Search />,
	argTypes: {
		buttonText: {
			name: 'Search button text'
		},
		placeholder: {
			name: 'Input placeholder text'
		}
	}
};

const Template = args => {
	return <Search {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	buttonText: 'Search',
	placeholder: 'Go for anything...'
};
