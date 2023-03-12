import { get } from "@/helpers";
import { JIRA_USERS, JIRA_PROJECT_ABBREVIATION } from "@/constants";

export const getLink = (jiraId: string) => {
  return `${process.env.JIRA_URL}/rest/api/2/search?jql=assignee%${jiraId}`;
};

export const getProject = () => {
  return get(
    `${process.env.JIRA_URL}/rest/api/latest/project/${JIRA_PROJECT_ABBREVIATION}`
  );
};

export const getUser = (link: string) => {
  return get(getLink(link));
};

export const getUserPromises = () =>
  Object.keys(JIRA_USERS).map((userName) => {
    return getUser(JIRA_USERS[userName as keyof typeof JIRA_USERS]);
  });
