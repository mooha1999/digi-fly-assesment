"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function TextEditor() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([""]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [fontSize, setFontSize] = useState("text-base");
  const [fontFamily, setFontFamily] = useState("font-sans");

  // Handle text changes
  const handleChange = (e: any) => {
    const newText = e.target.value;
    const newHistory = [...history.slice(0, historyIndex + 1), newText];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setText(newText);
  };

  

  // Handle undo functionality
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setText(history[historyIndex - 1]);
    }
  };

  // Handle redo functionality
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setText(history[historyIndex + 1]);
    }
  };

  // Apply formatting
  const applyFormat = (format: any) => {
    document.execCommand(format, false, undefined);
  };

  // Handle font size change
  const handleFontSizeChange = (size: any) => {
    setFontSize(size);
  };

  // Handle font family change
  const handleFontFamilyChange = (family: any) => {
    setFontFamily(family);
  };

  const ICONS = [
    {
      path: "/icons/orderedList.svg",
      alt: "ordered list",
      handler: () => {},
    },
    {
      path: "/icons/unorderedList.svg",
      alt: "unordered list",
      handler: () => {},
    },
    {
      path: "/icons/indent.svg",
      alt: "indent",
      handler: () => {},
    },
    {
      path: "/icons/alignLeft.svg",
      alt: "align left",
      handler: applyFormat.bind(null, "justifyLeft"),
    },
    {
      path: "/icons/alignJustify.svg",
      alt: "align justify",
      handler: applyFormat.bind(null, "justifyCenter"),
    },
    {
      path: "/icons/alignRight.svg",
      alt: "align right",
      handler: applyFormat.bind(null, "justifyRight"),
    },
    {
      path: "/icons/outdent.svg",
      alt: "outdent",
      handler: () => {},
    },
    {
      path: "/icons/fontFamily.svg",
      alt: "font family",
      handler: () => {},
    },
    {
      path: "/icons/bold.svg",
      alt: "bold",
      handler: applyFormat.bind(null, "bold"),
    },
    {
      path: "/icons/italic.svg",
      alt: "italic",
      handler: applyFormat.bind(null, "italic"),
    },
    {
      path: "/icons/underline.svg",
      alt: "underline",
      handler: applyFormat.bind(null, "underline"),
    },
    {
      path: "/icons/redo.svg",
      alt: "redo",
      handler: handleRedo,
    },
    {
      path: "/icons/undo.svg",
      alt: "undo",
      handler: handleUndo
    },
    {
      path: "/icons/fontSize.svg",
      alt: "font size",
      handler: () => {},
    },
  ];

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row items-center border border-[#6D5CBC1A] w-full">
        {ICONS.map((icon, index) => (
          <button
            key={index}
            className="py-5 px-7 bg-btn-bg hover:bg-primary flex items-center justify-center w-full"
            onClick={icon.handler}
          >
            <Image src={icon.path} width={24} height={24} alt={icon.alt} />
          </button>
        ))}
      </div>
      <div
        className={`w-full h-64 border border-gray-300 p-2 ${fontSize} ${fontFamily}`}
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => handleChange(e)}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
    // <div className="p-4">
    //   <div className="flex items-center border-b border-gray-200 mb-4 space-x-2">
    //     <button
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onClick={handleUndo}
    //       disabled={historyIndex === 0}
    //     >
    //       Undo
    //     </button>
    //     <button
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onClick={handleRedo}
    //       disabled={historyIndex === history.length - 1}
    //     >
    //       Redo
    //     </button>
    //     <button
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onClick={() => applyFormat("bold")}
    //     >
    //       Bold
    //     </button>
    //     <button
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onClick={() => applyFormat("italic")}
    //     >
    //       Italic
    //     </button>
    //     <button
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onClick={() => applyFormat("underline")}
    //     >
    //       Underline
    //     </button>
    //     <button
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onClick={() => applyFormat("justifyLeft")}
    //     >
    //       Align Left
    //     </button>
    //     <button
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onClick={() => applyFormat("justifyCenter")}
    //     >
    //       Align Center
    //     </button>
    //     <button
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onClick={() => applyFormat("justifyRight")}
    //     >
    //       Align Right
    //     </button>
    //     <select
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onChange={(e) => handleFontSizeChange(e.target.value)}
    //     >
    //       <option value="text-xs">Small</option>
    //       <option value="text-base" selected>
    //         Normal
    //       </option>
    //       <option value="text-lg">Large</option>
    //       <option value="text-xl">X-Large</option>
    //     </select>
    //     <select
    //       className="px-4 py-2 text-gray-700 hover:bg-gray-200"
    //       onChange={(e) => handleFontFamilyChange(e.target.value)}
    //     >
    //       <option value="font-sans" selected>
    //         Sans Serif
    //       </option>
    //       <option value="font-serif">Serif</option>
    //       <option value="font-mono">Monospace</option>
    //     </select>
    //   </div>
    //   <div
    //     className={`w-full h-64 border border-gray-300 p-2 ${fontSize} ${fontFamily}`}
    //     contentEditable
    //     suppressContentEditableWarning
    //     onInput={(e) => handleChange(e)}
    //     dangerouslySetInnerHTML={{ __html: text }}
    //   />
    // </div>
  );
}
