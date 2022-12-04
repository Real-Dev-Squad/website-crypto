import { rest } from 'msw';
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const testHandlers = [
  rest.get(`${URL}/test`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Test returned successfully!',
      })
    );
  }),
];

export default testHandlers;
