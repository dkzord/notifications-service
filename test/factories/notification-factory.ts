import { Content } from '@application/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Item count'),
    recipientId: 'recipient-1',
    ...override,
  });
}
