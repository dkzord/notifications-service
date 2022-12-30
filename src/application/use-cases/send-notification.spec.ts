import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be abel to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: '123456',
    });

    expect(notification).toBeTruthy();
  });
});
