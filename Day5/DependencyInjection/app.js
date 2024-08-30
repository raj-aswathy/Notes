const EmailService = require('./emailService');
const SMSService = require('./smsService');
const NotificationService = require('./notificationService');

// Injecting the EmailService
const emailService = new EmailService();
const emailNotification = new NotificationService(emailService);
emailNotification.sendNotification('Hello via Email!', 'email@example.com');

// Injecting the SMSService
const smsService = new SMSService();
const smsNotification = new NotificationService(smsService);
smsNotification.sendNotification('Hello via SMS!', '+1234567890');
