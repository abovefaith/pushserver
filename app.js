const webpush = require('web-push');

console.log(webpush.generateVAPIDKeys());

const publickKey = 'BKmM4-4F3Zr-N4yCp5vZxX4sKUdLpsArG8irDEaVcPDkXuQ7duU2nNuyT3ANuGlPwzLOtbJaLIapsiDZDVkOTEU';
const privateKey = 'KtIRprlvlrk8R0kmgQx2greJoGRHQVbGvJiEKW3GFgQ';


const sub = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/fSaZTABZ2jE:APA91bEvbZb7VQJnSlUbV8qzNH6i8lr1M_efbtlkTJRIPjLLiyv2UwhQMACFvONTm7bvH4PyfhR4WOHaqW9FZ_jN3Tt8WUs0D0KZS_B21J9KRXIACU_BxFtA8PSp-euqi9kJBBqhP9y_',
    expirationTime: null,
    keys: {
        p256dh: 'BCLVqyP1MPi8ZMkPPqG3MBHiQ3gIdnaJuRhg8QFmM2eHsTYziKBJkvNGyTNTqSk3pvqmYWiqxTl8JIpas89-MQo',
        auth: '1lUPVyFpcrr2uJNQv2a1vg'
    }
};

webpush.setVapidDetails('mailto:info@kenwideinstitute.com', publickKey, privateKey);

const payload = {
    notification: {
        data: { url: 'https://objectstore.nyc1.civo.com/kenwide/tests/logo476-removebg-preview.webp', id: 'abcd' }, //icon: url of your logo
        title: 'Kenwide Institute',
        body: 'This is a test push notification from Kenwide Institute.',
        vibrate: [100, 50, 100],
    }
};


webpush.sendNotification(sub, JSON.stringify(payload));


