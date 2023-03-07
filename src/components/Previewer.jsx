import "./Previewer.css";

export default function Previewer({ markedText }) {
  return (
    <div className="previewWrap">
      <div className="toolbar">
        <label htmlFor="preview">Previewer</label>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markedText }}></div>
    </div>
  );
}
