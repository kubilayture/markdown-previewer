import "./Editor.css";

export default function Editor({ text, handleChange, placeholder }) {
  return (
    <div className="editorWrap">
      <div className="toolbar">
        <label htmlFor="editor">Editor</label>
      </div>
      <textarea
        onChange={handleChange}
        id="editor"
        type="text"
        defaultValue={placeholder}
        value={text}
      ></textarea>
    </div>
  );
}
