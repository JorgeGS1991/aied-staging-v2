import React, { useState } from "react";
import axios from "axios";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CobolCodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const response = await fetch("http://localhost:3001/execute", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          script: code,
          language: "cobol", // Change this to the desired programming language
          versionIndex: "0",
          clientId: "7ec0243b3b9611fa78261417c15a063e",
          clientSecret:
            "4e98ad0ce89e1d9f9cab56bd6f5c14be0435966ead3f477ff3b5ff2b4f30b82b",
        }),
      })
        .then((response) => response.json())
        .then((data) => setOutput(data.output));
      //   const response = await axios
      //     .post("http://localhost:3001/execute", {
      //       language: "python", // Change this to the desired programming language
      //       versionIndex: "0",
      //       clientId: "7ec0243b3b9611fa78261417c15a063e",
      //       clientSecret:
      //         "4e98ad0ce89e1d9f9cab56bd6f5c14be0435966ead3f477ff3b5ff2b4f30b82b",
      //     })
      //     .then((res) => console.log(res.json()));
      //   let text = await new Response(response).text();
      //   console.log(JSON.stringify(text));
      //   setOutput(response.data.output);
    } catch (error) {
      console.error("Error executing code:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <textarea
            class="peer block min-h-[auto] w-full rounded border-2 bg-[#1E1E1E] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-white text-xs dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your COBOL code here"
            rows={10}
            cols={50}
          />
        </div>

        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <button onClick={runCode}>Run Code</button>
          <SyntaxHighlighter language="python" style={docco}>
            {output}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CobolCodeEditor;
