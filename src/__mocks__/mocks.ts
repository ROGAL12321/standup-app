export const statusName = "IN PROGRESS";
export const statusSummary = "some summary";
export const author = "John Doe";

const issue = {
  expand: "",
  fields: {
    assignee: {
      avatarUrls: {
        "16x16": "http://via.placeholder.com/16x16",
        "24x24": "http://via.placeholder.com/24x24",
        "32x32": "http://via.placeholder.com/32x32",
        "48x48": "http://via.placeholder.com/48x48",
      },
      displayName: author,
    },
    status: {
      name: statusName,
    },
    summary: statusSummary,
    issuetype: {
      iconUrl: "",
    },
  },
  id: "",
  key: "",
  self: "",
};

export const mockedUser = {
  expand: "",
  maxResults: 0,
  startAt: 0,
  total: 99,
  issues: [issue],
};

export const mockedUserWithoutIssues = {
  expand: "",
  maxResults: 0,
  startAt: 0,
  total: 99,
  issues: [],
};

export const mockedProjectResponse = {
  name: "Awesome Project",
};
