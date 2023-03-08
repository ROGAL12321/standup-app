import { useState } from "react";
import Head from "next/head";

import styles from "@/styles/Home.module.css";

import Person from "@/components/person";

let counter = 0;

const names = [
  "ada",
  "slawek",
  "rafal",
  "michal",
  "marek",
  "szymon",
  "michalm",
  "lukasz",
  "chris",
  "adrian",
].sort(() => Math.random() - 0.5);

export default function Home({ project, users }: any) {
  const [currentUser, setCurrentUser] = useState(names[0]);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);

  const handleClick = () => {
    counter++;

    if (counter > names.length - 1) {
      return setEnd(true);
    }

    setCurrentUser(names[counter]);
  };

  if (!start) {
    return (
      <div className={styles.container}>
        <h1>Are you ready?</h1>
        <img
          className={styles.mainPhoto}
          src="https://media.tenor.com/NNp_ehNBMEoAAAAM/excited-so.gif"
        ></img>
        <button onClick={() => setStart(true)}>Start</button>
      </div>
    );
  }

  if (end) {
    return (
      <div className={styles.container}>
        <img
          className={styles.mainPhoto}
          src="https://img1.picmix.com/output/pic/normal/5/3/5/6/7416535_1f01a.gif"
        />
        <h1>Thank you!</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.projectContainer}>
          <img src={project.avatarUrls["48x48"]} />
          <h2>{project.name}</h2>
        </div>

        <div>
          <Person data={users[currentUser]} onClick={handleClick} />
        </div>
      </main>
    </>
  );
}

const base64encodedData = Buffer.from(
  process.env.JIRA_EMAIL + ":" + process.env.JIRA_PERSONAL_ACCESS_TOKEN
).toString("base64");

const getLink = (jiraId: string) => {
  return `${process.env.JIRA_URL}/rest/api/2/search?jql=assignee%${jiraId}`;
};

const getProject = () => {
  return fetch(`${process.env.JIRA_URL}/rest/api/latest/project/FS`, {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getChris = () => {
  return fetch(getLink("3D6397943b61aba8a6a32c7cfb"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getLukasz = () => {
  return fetch(getLink("3D61656c307a6be400716050bd"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getMichalM = () => {
  return fetch(getLink("3D63b2ef228a07cbd184ab20e0"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getSzymon = () => {
  return fetch(getLink("3D633aa362234d44d406d3c27f"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getMarek = () => {
  return fetch(getLink("3D633aa00461dbef2805c10e68"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getMichal = () => {
  return fetch(getLink("3D62f0ded8ec6b328032f2c3a7"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getRafal = () => {
  return fetch(getLink("3D62e7e241da8620d533920cf7"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getSlawek = () => {
  return fetch(getLink("3D629f4c9c6a7b750068a1f46d"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getAda = () => {
  return fetch(getLink("3D63624d8ac97f5473af71e469"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getAdrian = () => {
  return fetch(getLink("3D63ff558b81de11a1adf9a29c"), {
    headers: {
      Authorization: "Basic " + base64encodedData,
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export async function getServerSideProps() {
  return Promise.all([
    getProject(),
    getAda(),
    getSlawek(),
    getRafal(),
    getMichal(),
    getMarek(),
    getSzymon(),
    getMichalM(),
    getLukasz(),
    getChris(),
    getAdrian(),
  ]).then(
    ([
      data,
      ada,
      slawek,
      rafal,
      michal,
      marek,
      szymon,
      michalm,
      lukasz,
      chris,
      adrian,
    ]) => {
      return {
        props: {
          project: data,
          users: {
            ada,
            slawek,
            rafal,
            michal,
            marek,
            szymon,
            michalm,
            lukasz,
            chris,
            adrian,
          },
        },
      };
    }
  );
}
