import { Content } from './content';
import { Notification } from './notification';

describe('Notification Content', () => {
  it('should be able to create a new content', () => {
    const notification = new Notification({
      content: new Content('This is a notification content'),
      category: 'social',
      recipientId: '1234567890',
    });

    expect(notification).toBeTruthy();
  });
});
