"use client";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  if (process.env.NODE_ENV === "development") {
    if (window === "undefined") {
      (async () => {
        const { server } = await import("../mocks/server");
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import("../mocks/browser");
        worker.start();
      })();
    }
  }
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
