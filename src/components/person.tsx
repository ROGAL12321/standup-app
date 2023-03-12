import { useEffect, useState } from "react";
import { SECONDS, STATUS_NAME_ORDER } from "@/constants";

import styles from "../styles/Person.module.css";

type PersonProps = {
  data: USER;
  onClick: () => void;
};

export default function Person({ data, onClick }: PersonProps) {
  const [counter, setCounter] = useState(SECONDS);

  useEffect(() => {
    const interval: any = setInterval(() => {
      if (counter > 0) {
        setCounter((counter) => counter - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCounter(SECONDS);
  }, [data?.issues[0]?.fields?.assignee?.displayName]);

  const readyIssues = data.issues
    .filter((issue: any) => {
      const isDone =
        issue.fields.status.name === "Won't Fix" ||
        issue.fields.status.name === "Done" ||
        issue.fields.status.name === "BACKLOG";

      return !isDone;
    })
    .sort((prev: any, next: any) => {
      return STATUS_NAME_ORDER.indexOf(prev.fields.status.name) >
        STATUS_NAME_ORDER.indexOf(next.fields.status.name)
        ? -1
        : 1;
    });

  return (
    <div>
      <h2>
        <img
          className={styles.avatar}
          src={data.issues[0].fields.assignee.avatarUrls["48x48"]}
        />{" "}
        {data.issues[0].fields.assignee.displayName}{" "}
        <span>{counter} second</span>
      </h2>
      <hr></hr>
      {readyIssues.length === 0 ? (
        <p>Nothing here. Whats up?</p>
      ) : (
        readyIssues.map((issue: any, index: number) => {
          return (
            <div key={index} className={styles.issue}>
              <p className={styles.issueTitle}>
                {" "}
                <img src={issue.fields.issuetype.iconUrl} alt="Icon" />
                {issue.key}
              </p>
              <p>
                {issue.fields.status.name}: {issue.fields.summary}
              </p>
            </div>
          );
        })
      )}

      <button style={{ fontSize: "90px" }} onClick={onClick}>
        Next!
      </button>
    </div>
  );
}
