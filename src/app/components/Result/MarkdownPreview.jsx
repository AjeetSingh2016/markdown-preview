// MarkdownPreview.js
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function MarkdownPreview({ value, onCopy }) {
  return (
    <div className="flex flex-col w-full md:w-1/2 bg-gray-800">
      <div className="p-4 flex justify-between items-center border-b border-gray-600">
        <h2 className="text-lg md:text-xl font-bold text-blue-400">Markdown Preview</h2>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onCopy}
        >
          Copy
        </button>
      </div>
      <div
        className="flex-grow p-6 overflow-auto prose prose-invert max-w-full"
        id="preview"
        style={{ maxHeight: "calc(100vh - 96px)" }} // Ensure the preview area has a scrollable height
      >
        <ReactMarkdown
          children={value}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className="bg-gray-700 text-blue-400 px-1 rounded" {...props}>
                  {children}
                </code>
              );
            },
            table({ children, ...props }) {
              return (
                <table
                  className="table-auto border-collapse border border-gray-700 w-full my-4"
                  {...props}
                >
                  {children}
                </table>
              );
            },
            thead({ children, ...props }) {
              return (
                <thead className="bg-gray-700" {...props}>
                  {children}
                </thead>
              );
            },
            th({ children, ...props }) {
              return (
                <th
                  className="border border-gray-600 px-4 py-2 text-left text-gray-200"
                  {...props}
                >
                  {children}
                </th>
              );
            },
            tr({ children, ...props }) {
              return (
                <tr className="odd:bg-gray-800 even:bg-gray-700" {...props}>
                  {children}
                </tr>
              );
            },
            td({ children, ...props }) {
              return (
                <td
                  className="border border-gray-600 px-4 py-2 text-gray-300"
                  {...props}
                >
                  {children}
                </td>
              );
            },
            blockquote({ children, ...props }) {
              return (
                <blockquote
                  className="border-l-4 border-blue-400 pl-4 italic text-gray-300 my-4"
                  {...props}
                >
                  {children}
                </blockquote>
              );
            },
            hr() {
              return <hr className="border-t border-gray-600 my-4" />;
            },
            h1({ children, ...props }) {
              return (
                <h1
                  className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-blue-400"
                  {...props}
                >
                  {children}
                </h1>
              );
            },
            h2({ children, ...props }) {
              return (
                <h2
                  className="text-2xl md:text-3xl font-semibold mt-5 mb-3 text-blue-300"
                  {...props}
                >
                  {children}
                </h2>
              );
            },
            h3({ children, ...props }) {
              return (
                <h3
                  className="text-xl md:text-2xl font-medium mt-4 mb-2 text-blue-200"
                  {...props}
                >
                  {children}
                </h3>
              );
            },
            p({ children, ...props }) {
              return (
                <p className="mb-4 text-gray-300" {...props}>
                  {children}
                </p>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
