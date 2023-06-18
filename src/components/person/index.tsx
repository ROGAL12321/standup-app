import { STATUS_NAME_ORDER } from "@/constants/constants";

import Button from "../button";

import styles from "./person.module.css";

type PersonProps = {
  data: User;
  handleNextPerson: () => void;
  counter: number;
};

export default function Person({
  data,
  handleNextPerson,
  counter,
}: PersonProps) {
  const readyIssues = data.issues
    .filter((issue) => {
      const isDone =
        issue.fields.status.name === "Won't Fix" ||
        issue.fields.status.name === "Done" ||
        issue.fields.status.name === "BACKLOG";

      return !isDone;
    })
    .sort((prev, next) => {
      return STATUS_NAME_ORDER.indexOf(prev.fields.status.name) >
        STATUS_NAME_ORDER.indexOf(next.fields.status.name)
        ? -1
        : 1;
    });

  return (
    <div className={styles.personContainer}>
      <div className={styles.nameContainer}>
        <img src={data.issues[0]?.fields.assignee.avatarUrls["48x48"]} />
        <h2>{data.issues[0]?.fields.assignee.displayName}</h2>
        <span>{counter}s</span>
      </div>

      {readyIssues.length === 0 ? (
        <p className={styles.issueSummary}>Nothing here. Whats up?</p>
      ) : (
        readyIssues.map((issue, index: number) => {
          return (
            <div key={index} className={styles.issue}>
              <p className={styles.issueTitle}>
                {" "}
                <img src={issue.fields.issuetype.iconUrl} alt="Icon" />
                {issue.key}
                <span>{issue.fields.status.name}</span>
              </p>
              <p className={styles.issueSummary}>{issue.fields.summary}</p>
            </div>
          );
        })
      )}

      <div className={styles.buttonContainer}>
        <Button onClick={handleNextPerson} centered>
          Next Person
        </Button>
      </div>
    </div>
  );
}
