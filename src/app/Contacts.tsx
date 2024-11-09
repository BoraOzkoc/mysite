import React from "react";
import "./Contacts.css";
import Card from "./Card";
import { Icon } from "@/app/Card";

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <h1 className="text">Contacts</h1>
      <div className="card-area">
        <Card icon={Icon.linkedin} link="https://linkedin.com/in/bora-ozkoc" />
        <Card icon={Icon.gitHub} link="https://github.com/BoraOzkoc" />
        <Card
          icon={Icon.appStore}
          link="http://apps.apple.com/us/developer/bora-ozkoc/id1742469862"
        />
        <Card
          icon={Icon.mail}
          link="mailto:boraozkoc@hotmail.com?subject=Reaching%20out%20from%20boraozkoc.com%20👋🏼"
        />
      </div>
    </div>
  );
};
export default Contacts;
