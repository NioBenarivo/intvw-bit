import React from "react";
import { render, fireEvent } from "../../test-utils";
import Modal from "@components/Modal";

describe("Modal component", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  const generalProps = {
    display: false,
    link: '',
    setModalProps: jest.fn(),
  }

  it("should render default modal component", () => {
    const { queryByTestId } = render(<Modal {...generalProps} />);

    const modalEl = queryByTestId('modal-el');

    expect(modalEl).not.toBeInTheDocument();
  });

  it("should render modal with content", () => {
    const customProps = {
      ...generalProps,
      display: true,
    }
    const { queryByTestId, getByText, getByRole } = render(<Modal {...customProps} />);

    const modalEl = queryByTestId('modal-el');
    expect(modalEl).toBeInTheDocument();

    const NoImg = getByText('No Image');
    expect(NoImg).toBeInTheDocument();

    const closeBtn = getByRole('button');
    expect(closeBtn).toBeInTheDocument();

    fireEvent.click(closeBtn);
    expect(customProps.setModalProps).toHaveBeenCalled();
  })
});