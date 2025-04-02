import CryptoJS from "crypto-js"
import dotenv from 'dotenv'

// Untuk Enkripsi URL
/**
 * 
 * @param data 
 * @returns string
 */
export const ecnryptUrl = (data: string) => {
    try {
        var b64 = CryptoJS.AES.encrypt(data, process.env.JWT_SECRET).toString();
        var e64 = CryptoJS.enc.Base64.parse(b64);
        var eHex = e64.toString(CryptoJS.enc.Hex);
        return eHex;
    } catch (err: any) {
        return err;
    }
}

// Untuk Dekripsi URL
/**
 * 
 * @param data 
 * @returns string
 */
export const dec = (data: string) => {
    try {
        var reb64 = CryptoJS.enc.Hex.parse(data);
        var bytes = reb64.toString(CryptoJS.enc.Base64);
        var decrypt = CryptoJS.AES.decrypt(bytes, process.env.JWT_SECRET);
        var plain = decrypt.toString(CryptoJS.enc.Utf8);
        return plain;
    } catch (err: any) {
        return err
    }
}