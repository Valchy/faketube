import Logo from './Logo';

export default {
	title: 'Faketube/Logo',
	component: <Logo />,
	argTypes: {
		text: {
			name: 'Title text'
		},
		alt: {
			name: 'Image alt text'
		}
	}
};

const Template = args => {
	return <Logo {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	text: 'FakeTube',
	alt: 'Cartoonish looking youtube logo'
};
