/**
 * Created by Administrator on 2017/8/23.
 */
console.log(__dirname);
var crypto = require('../lib/cryptDes');

var KEY = 'Qssdsdsd';
var IV = [0x12, 0x34, 0x56, 0x78, 0x90, 0xAB, 0xCD, 0xEF];
var message = "1234567890abcdef";

var en = crypto.encryptDes(message,KEY,IV);
console.log(en);
var de = crypto.decryptDes(en,KEY,IV);
console.log(de);