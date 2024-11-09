import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  IconDefinition,
  faLinkedin,
  faAppStoreIos,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faQuestion, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export enum Icon {
  gitHub,
  linkedin,
  appStore,
  mail,
}

type BR = {
  icon: Icon;
  link: string;
};

function Card(props: BR) {
  let icon: IconDefinition = faInstagram;

  switch (props.icon) {
    case Icon.linkedin: {
      icon = faLinkedin;
      break;
    }
    case Icon.gitHub: {
      icon = faSquareGithub;
      break;
    }
    case Icon.appStore: {
      icon = faAppStoreIos;
      break;
    }
    case Icon.mail: {
      icon = faSquareEnvelope;
      break;
    }
    default: {
      icon = faQuestion;
      break;
    }
  }

  return (
    <a className="card" href={props.link} target="_blank">
      <FontAwesomeIcon
        className="card-image"
        icon={icon}
        style={{ color: "#181818" }}
      />
    </a>
  );
}
export default Card;
