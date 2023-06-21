import Head from "next/head";
import Layout from "@/layouts/Layout";

import SkillSection from "@/components/Sections/SkillSection";
import HeroMe from "@/components/Sections/HeroMe";
import PlayGroundSection from "@/components/Sections/PlayGroundSection";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <Head>
        <title>Jerbee</title>
        <meta name="description" content="Hi, Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full overflow-hidden md:px-16">
        <HeroMe />
        <SkillSection />
        {/* <PlayGroundSection /> */}
      </main>
        <Footer />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
