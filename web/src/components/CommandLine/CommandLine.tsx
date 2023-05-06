import { useState } from "react";
import "./CommandLine.css";
import CardTray from "./CardTray/CardTray";

// single card commands [thing] cardname
const cmd = ["add", "remove", "check", "select"];

export default function CommandLine() {
  const [command, setCommand] = useState("");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const [first, ...rest] = value.split(" ");
    const remainder = rest.join(" ");

    switch (first.toLowerCase()) {
      case "add":
        console.log("[add] cardname");
        // add to decklist
        console.log(remainder);
        break;
      case "remove":
        console.log("[remove] cardname");
        // look through cards and remove card from decklist
        break;
      case "find":
        console.log("[find] card something");
      case "help":
        console.log("[help] ");
    }

    setCommand(value);
  };

  return (
    <div className="command-container">
      <CardTray />
      <form>
        <input
          className={"commandline"}
          value={command}
          onChange={handleOnChange}
          placeholder={"type help for a list of commands"}
        />
      </form>
    </div>
  );
}
