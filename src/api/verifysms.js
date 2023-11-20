// // Import thư viện Twilio
// const twilio = require('twilio');
// const accountSid = 'ACe4f37fb626fe0fb39df81b22c0f40caf';
// const authToken = '5666e41fc72c0ea92bfcd80c26cb2780';
// const verifyServiceSid = 'VA873c0a34c3c083a1fd671c02286ac3e8';
// const callerId = '0367483370';
// const client = twilio(accountSid, authToken);

// // Hàm gửi mã xác minh qua SMS
// export const sendSmsVerification = async (phoneNumber) => {
//   try {
//     const verification = await client.verify
//       .services(verifyServiceSid)
//       .verifications.create({
//         to: phoneNumber,
//         channel: 'sms',
//       });

//     console.log(`Verification sent: ${verification.sid}`);
//     return true;
//   } catch (error) {
//     console.error(`Error sending verification: ${error.message}`);
//     return false;
//   }
// };

// // Hàm kiểm tra mã xác minh
// export const checkVerification = async (phoneNumber, code) => {
//   try {
//     const verificationCheck = await client.verify
//       .services(verifyServiceSid)
//       .verificationChecks.create({
//         to: phoneNumber,
//         code: code,
//       });

//     if (verificationCheck.status === 'approved') {
//       console.log('Verification successful.');
//       return true;
//     } else {
//       console.log('Incorrect verification code.');
//       return false;
//     }
//   } catch (error) {
//     console.error(`Error checking verification: ${error.message}`);
//     return false;
//   }
// };

// // Hàm gửi tin nhắn SMS với Caller ID đã xác minh
// const sendSmsWithCallerId = async (to, body) => {
//   try {
//     const message = await client.messages.create({
//       body: body,
//       from: callerId,
//       to: to,
//     });

//     console.log(`SMS sent: ${message.sid}`);
//     return true;
//   } catch (error) {
//     console.error(`Error sending SMS: ${error.message}`);
//     return false;
//   }
// };

// // Sử dụng các hàm theo nhu cầu của bạn
