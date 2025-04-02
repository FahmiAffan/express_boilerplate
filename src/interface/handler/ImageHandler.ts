import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

type res = { status: boolean, name: string }

// fungsi menyimpan gambar ke dalam direktori
/**
 * 
 * @param data 
 * @param contentType 
 * @param dir 
 * @param fileName 
 * @param sliceSize 
 * @returns string
 */  

const FileHandler = (data: string, contentType: string, dir: string, fileName: string, sliceSize = 512) => {
    const Filterdata = data.split(',');

    const result: res = { status: true, name: '' };

    const generateFileName = btoa(`${Date.now()}${fileName}`)+ '.png';
    const filePath = path.join(__dirname, `src/public/images/${dir}`, generateFileName);

    fs.mkdirSync(path.join(__dirname, `src/public/images/${dir}`), { recursive: true });
    fs.writeFile(filePath, Filterdata[1], 'base64', (err) => {
        if (err) {
            console.error('Error writing file', err);
            result.status = false;
            return result;
        }
        console.log("success saving data at" + filePath);
    });
    result.name = generateFileName;

    return result;
}


export default FileHandler;
