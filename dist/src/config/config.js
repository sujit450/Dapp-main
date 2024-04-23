"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.getClient = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "skull shrimp horse fever exit image make vanish possible deliver opinion black seat spell spice together order chair domain toast normal rice baby above employ";
function getClient() {
    let client = new algosdk_1.default.Algodv2(algodToken, server, port);
    return client;
}
exports.getClient = getClient;
function getAccount() {
    let account = algosdk_1.default.mnemonicToSecretKey(mnemonic);
    return account;
}
exports.getAccount = getAccount;
//# sourceMappingURL=config.js.map