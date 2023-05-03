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

export const reduceByIndexOrder = <T extends {}>(
  collection: T,
  users: User[]
):
  | {
      [K in keyof T]: User;
    } => {
  //@ts-ignore
  return Object.keys(collection).reduce((acc, current, index) => {
    return {
      ...acc,
      [current]: users[index],
    };
  }, {});
};
