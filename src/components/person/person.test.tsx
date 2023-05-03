import Person from "@/components/person";
import { render, screen, act } from "@testing-library/react";
import {
  statusName,
  mockedUser,
  mockedUserWithoutIssues,
  author,
  statusSummary,
} from "../../__mocks__/mocks";

describe("Person Component", () => {
  it("renders a person component", () => {
    render(
      <Person handleNextPerson={() => null} data={mockedUser} counter={60} />
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(author);
  });

  it("renders a person component with issues", () => {
    render(
      <Person handleNextPerson={() => null} data={mockedUser} counter={60} />
    );

    const issueStatus = screen.getByText(statusName);
    const issueSummary = screen.getByText(statusSummary);

    expect(issueStatus).toHaveTextContent(statusName);
    expect(issueSummary).toHaveTextContent(statusSummary);
  });

  it("renders a person component without issues", () => {
    render(
      <Person
        handleNextPerson={() => null}
        data={mockedUserWithoutIssues}
        counter={60}
      />
    );

    const noIssuesText = screen.getByText(/Nothing here/i);
    expect(noIssuesText).toBeInTheDocument();
  });

  it("renders a person component unchanged", () => {
    const { container } = render(
      <Person handleNextPerson={() => null} data={mockedUser} counter={60} />
    );

    expect(container).toMatchSnapshot();
  });
});
