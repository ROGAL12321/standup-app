export const JIRA_USERS = {
  ada: "63624d8ac97f5473af71e469",
  chris: "6397943b61aba8a6a32c7cfb",
  damian: "6310a52cea661fd37d4f11cd",
  kellen: "63bf1bf62a526608c55023cf",
  lukasz: "61656c307a6be400716050bd",
  michal: "62f0ded8ec6b328032f2c3a7",
  michalm: "63b2ef228a07cbd184ab20e0",
  rafal: "62e7e241da8620d533920cf7",
  slawek: "629f4c9c6a7b750068a1f46d",
  szymon: "633aa362234d44d406d3c27f",
  mateusz: "712020:5611aff8-1f72-4bf8-a782-09c2bc30cf55",
};

export type JIRA_USERS = typeof JIRA_USERS;

export const NAMES: Array<keyof typeof JIRA_USERS> = Object.keys(
  JIRA_USERS
).sort(() => Math.random() - 0.5) as Array<keyof typeof JIRA_USERS>;

export const JIRA_PROJECT_ABBREVIATION = "FS";
export const SECONDS = 60;
export const STATUS_NAME_ORDER = ["To do", "In Review", "In Progress"];
