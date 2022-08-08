import "./modal.css";

export default function NavModal() {
  return (
    <div className="nav-modal">
      <div className="modal-link-container hidden">
        <a className="modal-link">About</a>
        <a className="modal-link">Projects</a>
        <a className="modal-link">Contact</a>
      </div>
    </div>
  );
}
