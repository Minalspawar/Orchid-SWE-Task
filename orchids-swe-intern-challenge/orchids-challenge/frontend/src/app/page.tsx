// // // // import Image from "next/image";

// // // // export default function Home() {
// // // //   return (
// // // //     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
// // // //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// // // //         <Image
// // // //           className="dark:invert"
// // // //           src="/next.svg"
// // // //           alt="Next.js logo"
// // // //           width={180}
// // // //           height={38}
// // // //           priority
// // // //         />
// // // //         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
// // // //           <li className="mb-2 tracking-[-.01em]">
// // // //             Get started by editing{" "}
// // // //             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
// // // //               src/app/page.tsx
// // // //             </code>
// // // //             .
// // // //           </li>
// // // //           <li className="tracking-[-.01em]">
// // // //             Save and see your changes instantly.
// // // //           </li>
// // // //         </ol>

// // // //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// // // //           <a
// // // //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// // // //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //           >
// // // //             <Image
// // // //               className="dark:invert"
// // // //               src="/vercel.svg"
// // // //               alt="Vercel logomark"
// // // //               width={20}
// // // //               height={20}
// // // //             />
// // // //             Deploy now
// // // //           </a>
// // // //           <a
// // // //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// // // //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //           >
// // // //             Read our docs
// // // //           </a>
// // // //         </div>
// // // //       </main>
// // // //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// // // //         <a
// // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           <Image
// // // //             aria-hidden
// // // //             src="/file.svg"
// // // //             alt="File icon"
// // // //             width={16}
// // // //             height={16}
// // // //           />
// // // //           Learn
// // // //         </a>
// // // //         <a
// // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           <Image
// // // //             aria-hidden
// // // //             src="/window.svg"
// // // //             alt="Window icon"
// // // //             width={16}
// // // //             height={16}
// // // //           />
// // // //           Examples
// // // //         </a>
// // // //         <a
// // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           <Image
// // // //             aria-hidden
// // // //             src="/globe.svg"
// // // //             alt="Globe icon"
// // // //             width={16}
// // // //             height={16}
// // // //           />
// // // //           Go to nextjs.org →
// // // //         </a>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";
// // // import { useState } from "react";

// // // export default function Home() {
// // //   const [url, setUrl] = useState("");
// // //   const [html, setHtml] = useState("");

// // //   async function handleClone() {
// // //     const response = await fetch("http://127.0.0.1:8000/clone", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ url }),
// // //     });

// // //     const data = await response.json();
// // //     setHtml(data.html);
// // //   }

// // //   return (
// // //     <div style={{ padding: "2rem" }}>
// // //       <h1>🌸 Website Cloner</h1>
// // //       <input
// // //         type="text"
// // //         placeholder="Enter website URL (e.g. https://example.com)"
// // //         value={url}
// // //         onChange={(e) => setUrl(e.target.value)}
// // //         style={{ width: "400px", padding: "10px" }}
// // //       />
// // //       <button onClick={handleClone} style={{ marginLeft: "10px", padding: "10px" }}>
// // //         Clone Website
// // //       </button>

// // //       <h2>🖼 Preview</h2>
// // //       <iframe
// // //         srcDoc={html}
// // //         style={{ width: "100%", height: "500px", border: "1px solid black", marginTop: "20px" }}
// // //       ></iframe>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";

// // export default function Home() {
// //   const [url, setUrl] = useState("");
// //   const [html, setHtml] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   async function handleClone() {
// //     setLoading(true);
// //     setError("");
// //     try {
// //       const response = await fetch("http://127.0.0.1:8000/clone", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ url }),
// //       });

// //       const data = await response.json();
// //       setHtml(data.html);
// //     } catch (err) {
// //       setError("Failed to fetch website. Please check the URL and try again.");
// //       setHtml("");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
// //       <h1 style={{ marginBottom: "1rem" }}>🌸 Website Cloner</h1>

// //       <input
// //         type="text"
// //         placeholder="Enter website URL (e.g. https://example.com)"
// //         value={url}
// //         onChange={(e) => setUrl(e.target.value)}
// //         style={{ width: "400px", padding: "10px", fontSize: "1rem" }}
// //       />

// //       <button
// //         onClick={handleClone}
// //         style={{
// //           marginLeft: "10px",
// //           padding: "10px 20px",
// //           fontSize: "1rem",
// //           backgroundColor: "#4CAF50",
// //           color: "white",
// //           border: "none",
// //           borderRadius: "4px",
// //           cursor: "pointer",
// //         }}
// //       >
// //         {loading ? "Cloning..." : "Clone Website"}
// //       </button>

// //       {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

// //       <h2 style={{ marginTop: "2rem" }}>🖼 Preview</h2>

// //       <iframe
// //         title="cloned-preview"
// //         srcDoc={html}
// //         style={{
// //           width: "100%",
// //           height: "500px",
// //           border: "1px solid #ccc",
// //           marginTop: "1rem",
// //           backgroundColor: "white",
// //         }}
// //       ></iframe>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useRef } from "react";

// export default function Home() {
//   const [url, setUrl] = useState("");
//   const [html, setHtml] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const previewRef = useRef<HTMLDivElement>(null);

//   async function handleClone() {
//     setLoading(true);
//     setError("");
//     setHtml("");
//     try {
//       const response = await fetch("http://127.0.0.1:8000/clone", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ url }),
//       });

//       const data = await response.json();
//       setHtml(data.html);

//       // Smooth scroll to preview section
//       setTimeout(() => {
//         previewRef.current?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     } catch (err) {
//       setError("Failed to fetch website. Please check the URL and try again.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ marginBottom: "1rem" }}>🌸 Website Cloner</h1>

//       <input
//         type="text"
//         placeholder="Enter website URL (e.g. https://example.com)"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         style={{ width: "100%", maxWidth: "400px", padding: "10px", fontSize: "1rem" }}
//       />

//       <button
//         onClick={handleClone}
//         disabled={loading || !url.trim()}
//         style={{
//           marginLeft: "10px",
//           padding: "10px 20px",
//           fontSize: "1rem",
//           backgroundColor: loading ? "#9E9E9E" : "#4CAF50",
//           color: "white",
//           border: "none",
//           borderRadius: "4px",
//           cursor: loading ? "not-allowed" : "pointer",
//         }}
//       >
//         {loading ? "Cloning..." : "Clone Website"}
//       </button>

//       {loading && (
//         <p style={{ marginTop: "1rem", fontStyle: "italic" }}>⏳ Cloning in progress…</p>
//       )}

//       {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

//       <div ref={previewRef} style={{ marginTop: "2rem" }}>
//         {html && <h2>🖼 Preview</h2>}
//         {html && (
//           <iframe
//             title="cloned-preview"
//             srcDoc={html}
//             style={{
//               width: "100%",
//               height: "500px",
//               border: "1px solid #ccc",
//               marginTop: "1rem",
//               backgroundColor: "white",
//             }}
//           ></iframe>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const previewRef = useRef<HTMLDivElement | null>(null);

  async function handleClone() {
    setLoading(true);
    setError("");
    setHtml("");

    try {
      const response = await fetch("http://127.0.0.1:8000/clone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch website");
      }

      const data = await response.json();
      setHtml(data.html);

      setTimeout(() => {
        previewRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // wait for iframe to render

    } catch (err) {
      setError("Failed to fetch website. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "1rem" }}>🌸 Website Cloner</h1>

      <input
        type="text"
        placeholder="Enter website URL (e.g. https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "400px", padding: "10px", fontSize: "1rem" }}
      />

      <button
        onClick={handleClone}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {loading ? "Cloning..." : "Clone Website"}
      </button>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      <h2 style={{ marginTop: "2rem" }}>🖼 Preview</h2>

      <div ref={previewRef} style={{ marginTop: "1rem" }}>
        {loading && (
          <div
            style={{
              textAlign: "center",
              fontStyle: "italic",
              color: "#555",
              padding: "1rem",
            }}
          >
            Loading preview...
          </div>
        )}

        <iframe
          title="cloned-preview"
          srcDoc={html}
          style={{
            width: "100%",
            height: "500px",
            border: "1px solid #ccc",
            backgroundColor: "white",
            display: html ? "block" : "none",
          }}
        ></iframe>
      </div>
    </div>
  );
}
