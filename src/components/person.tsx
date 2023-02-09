import { useEffect, useState } from "react";
import styles from "../styles/Person.module.css";

const seconds = 60;

export default function Person({ data, onClick }: any) {
  const [counter, setCounter] = useState(seconds);

  useEffect(() => {
    const interval: any = setInterval(() => {
      if (counter > 0) {
        setCounter((counter) => counter - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCounter(seconds);
  }, [data?.issues[0]?.fields?.assignee?.displayName]);

  const readyIssues = data.issues.filter((issue: any) => {
    const isDone =
      issue.fields.status.name === "Won't Fix" ||
      issue.fields.status.name === "Done";

    return issue.fields.project.key === "FS" && !isDone;
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
              <p>
                {" "}
                <strong>{issue.key} </strong>{" "}
              </p>
              <p>
                {issue.fields.status.name}: {issue.fields.summary}
              </p>
            </div>
          );
        })
      )}

      <button style={{ fontSize: "90px" }} onClick={onClick}>
        {counter < 0
          ? `${Math.abs(counter)} push-ups after stand-up!`
          : "Next!"}
      </button>
    </div>
  );
}
