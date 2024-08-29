class NotificationService {
    constructor(notificationService) {
      this.notificationService = notificationService;
    }
  
    sendNotification(message, recipient) {
      this.notificationService.send(message, recipient);
    }
  }
  
  module.exports = NotificationService;
  