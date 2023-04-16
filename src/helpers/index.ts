import { JIRA_USERS } from "@/constants";

const base64encodedData = Buffer.from(
  process.env.JIRA_EMAIL + ":" + process.env.JIRA_PERSONAL_ACCESS_TOKEN
).toString("base64");

export const get = (link: string) => {
  return fetch(link, {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const reduceByIndexOrder = <
  T extends {
    [K in keyof JIRA_USERS]: User;
  }
>(
  collection: T,
  users: User[]
): {
  [key: string]: any;
} => {
  return Object.keys(collection).reduce((acc, current, index) => {
    return {
      ...acc,
      [current]: users[index],
    };
  }, {});
};
