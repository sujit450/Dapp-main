"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const uniRoute_js_1 = tslib_1.__importDefault(require("./routes/uniRoute.js"));
const cors_1 = tslib_1.__importDefault(require("cors"));
// We will create an express app
const app = (0, express_1.default)();
// The port that the express server will listen on
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// //our new route
app.use('/api/Uni', uniRoute_js_1.default);
// Start the express server
app.listen(PORT, () => {
    console.log('Server is listening on port ${PORT}');
});
//# sourceMappingURL=server.js.map