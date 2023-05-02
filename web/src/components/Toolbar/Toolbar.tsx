import Search from "../Search";
import "./Toolbar.css";
export function Toolbar() {
  return (
    <div className="border">
      <ul className="toolbar">
        <li>Edit Primer</li>
        <li>Playtest</li>
        <li>Bulk Edit</li>
        <li>Import</li>
        <li>Export</li>
      </ul>
      <Search />
    </div>
  );
}
