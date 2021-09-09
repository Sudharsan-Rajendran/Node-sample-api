const ZapsDB = require('@zapscloud/zapsdatabase');
const ZapsAuth = require('@zapscloud/zapsauth');


exports.InitZapsDB = function () {
    var zapsdb = new ZapsDB({
      app: process.env.ZAPS_APP_NAME,
      authkey: process.env.ZAPS_AUTHKEY,
      authsecret: process.env.ZAPS_AUTHSECRET
    })
    console.log('zapsdb',zapsdb);
    return zapsdb;
  }