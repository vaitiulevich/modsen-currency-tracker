import { notificationService } from '@utils/NotificationService';

describe('NotificationService', () => {
  let observer1: jest.Mock;
  let observer2: jest.Mock;

  beforeEach(() => {
    observer1 = jest.fn();
    observer2 = jest.fn();
    notificationService.unsubscribe(observer1);
    notificationService.unsubscribe(observer2);
  });

  test('should subscribe an observer', () => {
    notificationService.subscribe(observer1);
    notificationService.notify();
    expect(observer1).toHaveBeenCalled();
  });

  test('should notify all subscribed observers', () => {
    notificationService.subscribe(observer1);
    notificationService.subscribe(observer2);
    notificationService.notify();

    expect(observer1).toHaveBeenCalled();
    expect(observer2).toHaveBeenCalled();
  });

  test('should unsubscribe an observer', () => {
    notificationService.subscribe(observer1);
    notificationService.unsubscribe(observer1);
    notificationService.notify();

    expect(observer1).not.toHaveBeenCalled();
  });

  test('should not affect other observers when one is unsubscribed', () => {
    notificationService.subscribe(observer1);
    notificationService.subscribe(observer2);
    notificationService.unsubscribe(observer1);
    notificationService.notify();

    expect(observer1).not.toHaveBeenCalled();
    expect(observer2).toHaveBeenCalled();
  });
});
