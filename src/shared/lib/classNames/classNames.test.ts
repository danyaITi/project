import { classNames } from 'shared/lib';

describe('classNames', () => {
    test('test without additional and mode', () => {
        expect(classNames('style', {}, [])).toBe('style');
    });

    test('test without mode', () => {
        expect(classNames('style', {}, ['style2'])).toBe('style style2');
    });

    test('test without additional', () => {
        expect(classNames('style', { selected: true, hovered: false }, []))
            .toBe('style selected');
    });

    test('test with additional and mode', () => {
        expect(classNames(
            'style',
            { selected: true, hovered: false },
            ['style2']
        ))
            .toBe('style style2 selected');
    });
});
