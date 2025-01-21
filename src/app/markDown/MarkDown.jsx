"use client";
import React from "react";
import { useMyContext } from "@/context/MyContext";
import MarkdownInput from "../components/Input/MarkdownInput"; // Import the input component
import MarkdownPreview from "../components/Result/MarkdownPreview"; // Import the preview component
import Footer from "../components/Footer/Footer";

export default function MarkDown() {
  const { value, setValue } = useMyContext();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCopyInput = () => {
    navigator.clipboard.writeText(value).then(() => {
      alert("Input copied to clipboard!");
    }).catch((err) => {
      console.error("Clipboard write failed:", err);
      alert("Failed to copy input to clipboard.");
    });
  };

  const handleResetInput = () => {
    setValue("");
  };

  const handleCopyPreview = () => {
    const previewText = document.getElementById("preview")?.innerText || "";
    if (previewText) {
      navigator.clipboard.writeText(previewText).then(() => {
        alert("Preview copied to clipboard!");
      }).catch((err) => {
        console.error("Clipboard write failed:", err);
        alert("Failed to copy preview to clipboard.");
      });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-grow flex-col md:flex-row overflow-hidden">
        {/* Input Section */}
        <MarkdownInput
          value={value}
          onChange={handleChange}
          onCopy={handleCopyInput}
          onReset={handleResetInput}
        />

        {/* Preview Section */}
        <MarkdownPreview value={value} onCopy={handleCopyPreview} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
