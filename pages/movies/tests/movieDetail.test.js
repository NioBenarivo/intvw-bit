import React from "react"
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor } from "../../../test-utils"
import MovieDetail from "../[id]"
import { movieDetailMock } from '../__data_mocks__'

jest.mock("next/router", () => ({
  useRouter() {
    return {
        route: "/",
        pathname: "",
        query: {
          id: 'tt0096895'
        },
        asPath: "",
    };
  },
}));

describe("Movie Detail Page", () => {
  const server = setupServer(
    rest.get('http://www.omdbapi.com/', (req, res, ctx) => {
      
      return res(
        ctx.status(200),
        ctx.json({ ...movieDetailMock })
      )
    })
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it("should render default Movie Detail Page", async () => {
    const { getByText, getAllByText } = render(
      <MovieDetail />
    );
    await waitFor(() => getByText(/Back/i))
    
    const title = getAllByText(/Batman/i)[0];
    expect(title).toBeInTheDocument();
  });
});