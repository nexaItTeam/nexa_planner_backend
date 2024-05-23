const CryptoJS = require("crypto-js");

function  encryptData(datatoencrypt){
let data = CryptoJS.AES.encrypt(
    JSON.stringify({ datatoencrypt }),
    "12345678"
  ).toString();
  return data;
}
function decryptData(datatodecrypt){
    console.log('decrpt',datatodecrypt)
    const bytes = CryptoJS.AES.decrypt(datatodecrypt,  "12345678");
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    const decryptedObject = JSON.parse(decryptedString);

    return decryptedObject;
}
module.exports = {encryptData,decryptData};
