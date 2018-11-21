var qiniu = require("node-qiniu");

qiniu.config({
  access_key: 'YourAccessKeyFromQiniu',
  secret_key: 'YourSecretKeyFromQiniu'
});

var imagesBucket = qiniu.bucket('YourBucketNameFromQiniu');

// 普通上传
imagesBucket.putFile('UploadToQiniuSavedFileName', __dirname + 'UploadToQiniuLocalFileName', function(err, reply) {
  if (err) {
    return console.error(err);
  }

  console.dir(reply);
});