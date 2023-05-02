import { CardData } from "../../testdata";
import "./Cardviewer.css";

export function Cardviewer({ commander }: { commander: CardData }) {
  return (
    <div>
      <img
        className="card-view"
        draggable={false}
        src={commander.image_uris.normal}
      />
    </div>
  );
}
