// MarkdownInput.js
import React from "react";

export default function MarkdownInput({ value, onChange, onCopy, onReset }) {
  return (
    <div className="flex flex-col w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-600">
      <div className="p-4 bg-gray-800 flex justify-between items-center border-b border-gray-600">
        <h2 className="text-lg md:text-xl font-bold text-blue-400">Markdown Input</h2>
        <div className="space-x-2">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onCopy}
          >
            Copy
          </button>
          <button
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
      <textarea
        className="flex-grow p-4 resize-none bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-auto h-48 md:h-full"
        placeholder="Enter Markdown text here..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
