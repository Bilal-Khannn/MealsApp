import { useGlobalContext } from "../context";

export default function Modal() {
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <h1>modal container</h1>
      </div>
    </aside>
  );
}
