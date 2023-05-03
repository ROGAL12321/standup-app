import { fireEvent, render, screen, act } from "@testing-library/react";
import jestFetchMock from "jest-fetch-mock";

import Home, { getServerSideProps } from "@/pages/index";
import { mockedProjectResponse, mockedUser } from "../__mocks__/mocks";
import { NAMES } from "@/constants/constants";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(async () => {
  jestFetchMock.resetMocks();
  jestFetchMock.mockResponse((req) => {
    return req.url.includes("project")
      ? Promise.resolve(JSON.stringify(mockedProjectResponse))
      : Promise.resolve(JSON.stringify(mockedUser));
  });
});

describe("Index Page", () => {
  it("renders a heading", async () => {
    const {
      props: { project, users },
    } = await getServerSideProps();

    render(<Home project={project} users={users} />);

    const heading = screen.getByRole("heading", {
      level: 2,
    });

    expect(heading).toHaveTextContent(/awesome project/i);
  });

  it("runs the app", async () => {
    const {
      props: { project, users },
    } = await getServerSideProps();

    render(<Home project={project} users={users} />);

    const startButton = screen.getByRole("button");

    fireEvent.click(startButton);

    const author = screen.getByText(/john doe/i);
    const timer = screen.getByText(/60/i);

    expect(author).toBeInTheDocument();
    expect(timer).toBeInTheDocument();
  });

  it("changes the person", async () => {
    const {
      props: { project, users },
    } = await getServerSideProps();

    render(<Home project={project} users={users} />);

    // Starts the app
    fireEvent.click(screen.getByRole("button"));

    // Checks the counter
    const counter = screen.getByText(/60/i);
    act(() => jest.advanceTimersByTime(2000));
    expect(counter).toHaveTextContent("58");

    // Change to the next person
    fireEvent.click(screen.getByRole("button"));

    // Rechecks the counter
    const secondCounter = await screen.findByText(/60/i);
    expect(secondCounter).toHaveTextContent("60");
  });

  it("shows thank you message", async () => {
    const {
      props: { project, users },
    } = await getServerSideProps();

    render(<Home project={project} users={users} />);

    // Starts the app
    fireEvent.click(screen.getByRole("button"));

    // Get thourgh all members the ceremony

    NAMES.slice(0, -1).forEach(() => {
      fireEvent.click(screen.getByRole("button"));
    });

    const thankYouMessage = screen.getByRole("heading", { level: 1 });
    expect(thankYouMessage).toHaveTextContent(/thank you/i);
  });
});
