export const JIRA_USERS = {
  ada: "3D63624d8ac97f5473af71e469",
  adrian: "3D63ff558b81de11a1adf9a29c",
  chris: "3D6397943b61aba8a6a32c7cfb",
  damian: "3D6310a52cea661fd37d4f11cd",
  kellen: "3D63bf1bf62a526608c55023cf",
  lukasz: "3D61656c307a6be400716050bd",
  marek: "3D633aa00461dbef2805c10e68",
  michal: "3D62f0ded8ec6b328032f2c3a7",
  michalm: "3D63b2ef228a07cbd184ab20e0",
  rafal: "3D62e7e241da8620d533920cf7",
  slawek: "3D629f4c9c6a7b750068a1f46d",
  szymon: "3D633aa362234d44d406d3c27f",
};

export type JIRA_USERS = typeof JIRA_USERS;

export const NAMES: Array<keyof typeof JIRA_USERS> = Object.keys(
  JIRA_USERS
).sort(() => Math.random() - 0.5) as Array<keyof typeof JIRA_USERS>;

export const JIRA_PROJECT_ABBREVIATION = "FS";
export const SECONDS = 60;
export const STATUS_NAME_ORDER = ["To do", "In Review", "In Progress"];
