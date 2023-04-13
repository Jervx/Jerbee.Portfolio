import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth " lang="en">
      <Head />
      <body className="overflow-x-hidden text-gray-800 duration-500 ease-in-out font-inter dark:text-gray-300 dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
