import { render } from "../lib.js";

const root = document.querySelector('main');

export default function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}