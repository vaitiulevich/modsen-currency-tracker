type Observer = () => void;

class NotificationService {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notify() {
    this.observers.forEach((observer) => observer());
  }
}

export const notificationService = new NotificationService();
