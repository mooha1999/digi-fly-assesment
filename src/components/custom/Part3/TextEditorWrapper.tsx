import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function TextEditorWrapper() {

  const TextEditor = useMemo(
    () =>
      dynamic(() => import("./TextEditor"), {
        loading: () => <p>A text editor is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <article>
      <TextEditor />
    </article>
  );
}
