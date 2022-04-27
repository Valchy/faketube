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

export const Default = Template.bind({});
Default.args = {
	videoId: 'bTecHenYWqA',
	timeElapsed: 0,
	isPlaying: true,
	isMuted: false
};
