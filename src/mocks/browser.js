import { rest } from 'msw';
import { setupWorker } from 'msw';
// JSON response data
import wsbdata from './data/wsbdata.json';
import nvdadata from './data/nvdadata.json';
import search from './data/search.json';
import chartdata from './data/chartdata.json';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
	rest.get('https://tradestie.com/api/v1/apps/reddit', (req, res, ctx) => {
		// capture "GET /greeting" requests
		return res(ctx.json(wsbdata)); // respond using a mocked JSON body
	}),
	rest.get(
		'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NVDA&apikey=T3DKNFX8EZJN7WS5',
		(req, res, ctx) => {
			// capture "GET /greeting" requests
			return res(ctx.json({ nvdadata })); // respond using a mocked JSON body
		}
	),
	rest.get(
		'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=NVDA&apikey=T3DKNFX8EZJN7WS5',
		(req, res, ctx) => {
			// capture "GET /greeting" requests
			return res(ctx.json({ search })); // respond using a mocked JSON body
		}
	),
	rest.get(
		'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=NVDA&apikey=T3DKNFX8EZJN7WS5',
		(req, res, ctx) => {
			// capture "GET /greeting" requests
			return res(ctx.json({ chartdata })); // respond using a mocked JSON body
		}
	)
);
