// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-example-push

var fs = require('fs');
var path = require('path');

// Replace with your unique name
exports.appName = 'LoopBackPushNotificationDemoApplication';

// Use your own Server Key as generated by Google Developer Console
// For more details, see http://developer.android.com/google/gcm/gs.html
exports.gcmServerApiKey = 'Your-server-api-key';

// You may want to use your own credentials here
exports.apnsCertData = readCredentialsFile('apns_cert_dev.pem');
exports.apnsKeyData =readCredentialsFile('apns_key_dev.pem');


//--- Helper functions ---

function readCredentialsFile(name) {
  return fs.readFileSync(
    path.resolve(__dirname, 'credentials', name),
    'UTF-8'
  );
}
