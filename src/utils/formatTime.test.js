import { formatTime } from './formatTime';

it('should return mileseconds formated to minutes and seconds', () => {
    expect(formatTime(237200)).toBe("3:57");
});