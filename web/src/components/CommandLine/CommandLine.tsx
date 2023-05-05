import { useState } from "react";
import "./CommandLine.css";

export default function CommandLine() {
  const [command, setCommand] = useState("");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <input className={"commandline"} onChange={handleOnChange} />
    </form>
  );
}
