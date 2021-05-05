import React from "react";
import { render, fireEvent } from "../../test-utils";
import Movie from "@components/Movie";

describe("Movie component", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  const generalProps = {
    data: {
      Poster: "",
      Title: "Batman",
      Year: "2013",
      imdbID: "11100"
    },
    onClick: jest.fn(),
    searchLayout: false,
  }

  it("should render default movie component", () => {
    const { getByText, getByTestId } = render(<Movie {...generalProps} />);

    const title = getByText('Batman');
    const year = getByText('2013');
    const noImg = getByText('No Image');

    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(noImg).toBeInTheDocument();

    const link = getByText('See details');
    expect(link).toHaveAttribute('href', '/movies/11100')

    const clickEl = getByTestId('movie-el');
    fireEvent.click(clickEl);

    expect(generalProps.onClick).not.toHaveBeenCalled();
  });

  it("should render movie component with search layout props ", () => {
    const searchLayoutProps = {
      ...generalProps,
      searchLayout: true
    }
    const { getByText, queryByText, getByTestId } = render(<Movie {...searchLayoutProps} />);
    
    const title = getByText('Batman');
    const year = getByText('2013');
    const noImg = getByText('No Image');

    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(noImg).toBeInTheDocument();

    const link = queryByText('See details');
    expect(link).not.toBeInTheDocument();

    const clickEl = getByTestId('movie-el');
    fireEvent.click(clickEl);

    expect(generalProps.onClick).toHaveBeenCalled();
  });
});