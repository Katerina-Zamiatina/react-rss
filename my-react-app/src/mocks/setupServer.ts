import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { movieApi } from '../redux/movieApi';

const server = setupServer(
  rest.get(`/${movieApi.reducerPath}/${movieApi.endpoints.fetchTrendies.name}`, (req, res, ctx) => {
    const responseData = {
      page: 1,
      results: [{ id: 1, title: 'Movie 1' }],
      total_pages: 1,
      total_results: 1,
    };
    return res(ctx.json(responseData));
  }),
  rest.get(`/${movieApi.reducerPath}/${movieApi.endpoints.fetchById.name}/*`, (req, res, ctx) => {
    const id = req.url.searchParams.get('query');
    const responseData = { id: Number(id), title: `Movie ${id}` };
    return res(ctx.json(responseData));
  }),
  rest.get(
    `/${movieApi.reducerPath}/${movieApi.endpoints.fetchByQuery.name}/*`,
    (req, res, ctx) => {
      const value = req.url.searchParams.get('query');
      const responseData = {
        page: 1,
        results: [{ id: 1, title: `Movie ${value}` }],
        total_pages: 1,
        total_results: 1,
      };
      return res(ctx.json(responseData));
    }
  )
);

export { server };
