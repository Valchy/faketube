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

export const Primary = Template.bind({});
Primary.args = {
	buttonText: 'Search',
	placeholder: 'Go for anything...'
};
