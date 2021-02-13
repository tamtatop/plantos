import * as Header from './header.js'
import * as Footer from './footer.js'
import * as Plant from './plant.js'
import * as Home from './home.js'
import * as Filter from './filter.js'

Header.render();
Footer.render();

location.hash = location.hash || '#/'

const router = new Navigo('/', { hash: true });
router
	.on("/", () => {
		Home.render();
	})
	.on("/plant/:id", ({ data }) => {
		Filter.closeFilter();
		Plant.render(data.id);
	})
	.resolve();