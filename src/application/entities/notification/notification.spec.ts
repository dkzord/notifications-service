import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New solicitation for friendship'),
      category: 'social',
      recipientId: '123456',
    });

    expect(notification).toBeTruthy();
  });
});
