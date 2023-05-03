type Issue = {
  expand: string;
  fields: {
    assignee: {
      avatarUrls: {
        "16x16": string;
        "24x24": string;
        "32x32": string;
        "48x48": string;
      };
      displayName: string;
    };
    status: {
      name: string;
    };
    summary: string;
    issuetype: {
      iconUrl: string;
    };
  };
  id: string;
  key: string;
  self: string;
};

type User = {
  expand: string;
  issues: Issue[];
  maxResults: number;
  startAt: number;
  total: number;
};

type Project = {
  avatarUrls: {
    [K in "16x16" | "32x32" | "48x48"]: string;
  };
  name: string;
};
