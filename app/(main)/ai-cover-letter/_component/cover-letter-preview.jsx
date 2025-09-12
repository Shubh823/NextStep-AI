
"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterEditor = ({ content }) => {
  const [contents, setContents] = useState(content);
  const [mode, setMode] = useState("edit");

  return (
    <div className="py-4" data-color-mode="dark" style={{ backgroundColor: "black", color: "white" }}>
      {/* Custom toolbar */}
      <div className="flex gap-2 mb-2 bg-black p-2 rounded">
        <button
          className={`px-3 py-1 rounded ${mode === "edit" ? "bg-gray-700 text-white" : "bg-black text-white"}`}
          onClick={() => setMode("edit")}
        >
          ✏️ Edit
        </button>
        <button
          className={`px-3 py-1 rounded ${mode === "live" ? "bg-gray-700 text-white" : "bg-black text-white"}`}
          onClick={() => setMode("live")}
        >
          🖇️ Edit + Preview
        </button>
        <button
          className={`px-3 py-1 rounded ${mode === "preview" ? "bg-gray-700 text-white" : "bg-black text-white"}`}
          onClick={() => setMode("preview")}
        >
          👁️ Preview
        </button>
      </div>

      {/* Markdown Editor */}
      <div className="bg-black text-white rounded p-2">
        <MDEditor
          value={contents}
          onChange={setContents}
          height={700}
          preview={mode}
          data-color-mode="dark"
          style={{ backgroundColor: "black", color: "white" }}
        />
      </div>
    </div>
  );
};

export default CoverLetterEditor;
