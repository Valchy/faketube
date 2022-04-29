import playNext from './playNext';

describe('Test if play next function returns a valid video ID', () => {
	it('Should return "B" as "A" is set to be the current ID', () => {
		const nextID = playNext(['A', 'B'], 'A');
		expect(nextID).toBe('B');
	});

	it('Should return null as the queue consists of only one video', () => {
		const nextID = playNext(['A'], 'A');
		expect(nextID).toBe(null);
	});
});
