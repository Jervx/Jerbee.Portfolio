import { Html, Head, Main, NextScript } from "next/document";

import UnderConstruction from "@/components/UnderConstruction";

export default function Document() {
  return (
    <Html className="scroll-smooth " lang="en">
      <Head />
      <body className="overflow-x-hidden text-gray-800 duration-500 ease-in-out font-inter dark:text-gray-300 dark:bg-gray-900">
        <Main />
        <div className="sticky bottom-0 left-0 z-50 w-full h-28 dark:bg-gray-800/10 backdrop-blur-md">
            <UnderConstruction />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
