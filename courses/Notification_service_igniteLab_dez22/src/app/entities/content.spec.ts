import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a new content', () => {
    const content = new Content('This is a content');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification with less than  5 characteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification with more than characteres 240', () => {
    expect(() => new Content('aaa'.repeat(241))).toThrow();
  });
});
