import { page } from './lib.js'
import decorateContext from '../src/middlewares/decorateContext.js';
import { detailsView } from './views/detailsView.js';

page(decorateContext);
page('/', detailsView);

page.start();