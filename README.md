# Des

This example is for DES

# step

npm insatll des_zxd

# example

var des = require('des_zxd');

var data = '1234567890abcdef';  //加密数据

var KEY = 'Qssdsdsd';  //密匙

var IV = [0x12, 0x34, 0x56, 0x78, 0x90, 0xAB, 0xCD, 0xEF];  // 向量

des.encryptDes(data,KEY,IV);  //加密

des.decryptDes(data,KEY,IV);  //解密
