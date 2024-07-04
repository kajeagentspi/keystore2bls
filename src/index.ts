import {
    Keystore,
    decrypt,
} from "@chainsafe/bls-keystore";
import { bytesToHex } from "ethereum-cryptography/utils";
import fs from "fs";


const main = async() =>{
    if (process.argv.length < 4) {
        console.log("Usage: npm start src/index.ts <keystore file> <password>");
        return;
    }
    const keystoreFileName = process.argv[2];
    const keystoreText = fs.readFileSync(keystoreFileName, "utf-8").toString();
    const keystore = Keystore.parse(keystoreText);
    const password = process.argv[3];

    const privateKey = await decrypt(keystore,password);
    console.log("0x"+bytesToHex(privateKey));
}

main();