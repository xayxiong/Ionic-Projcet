"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static('public'));
// query
app.get('/', (req, res) => {
    const a = Number(req.query['a']);
    const b = Number(req.query['b']);
    res.send((a + b) + '');
});
// params
app.get('/:a/:b', (req, res) => {
    const a = Number(req.params['a']);
    const b = Number(req.params['b']);
    res.send((a + b) + '');
});
app.post('/body', (req, res) => {
    const { a, b } = req.body;
    res.send((a + b) + '');
});
app.listen(3000, '0.0.0.0', () => {
    console.log('SERVER started port 3000');
});
