"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeUniData = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
const config_js_1 = require("../config/config.js");
const storeUniData = async (data) => {
    try {
        const client = (0, config_js_1.getClient)();
        const account = (0, config_js_1.getAccount)();
        const suggestedParams = await client.getTransactionParams().do();
        const note = algosdk_1.default.encodeObj(data);
        const txn = algosdk_1.default.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = await client.sendRawTransaction(signedTxn).do();
        console.log("Transaction ID:", sendTxn.txId);
    }
    catch (error) {
        console.error("Failed to store University data:", error);
    }
};
exports.storeUniData = storeUniData;
//# sourceMappingURL=helpers.js.map