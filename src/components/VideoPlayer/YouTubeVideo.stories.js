import YouTubeVideo from './YouTubeVideo';

export default {
	title: 'Faketube/YouTubeVideo',
	component: <YouTubeVideo />,
	argTypes: {
		videoId: {
			name: 'YouTube video ID'
		}
	}
};

const Template = args => {
	return <YouTubeVideo {...args} />;
};

export const BigScreen = Template.bind({});
BigScreen.args = {
	videoId: '36YnV9STBqc',
	bigScreen: true
};

export const SmallScreen = Template.bind({});
SmallScreen.args = {
	videoId: '36YnV9STBqc',
	bigScreen: false
};
