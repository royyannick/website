import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Publications from "../components/Publications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yannick | NeuroTech and Blockchain</title>
        <meta
          name="description"
          content="Yannick Roy's personal website. #Blockchain #NeuroTech"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />

      {/* Insert Quote: “If the brain were so simple we could understand it, we
              would be so simple we couldn’t.” -Lyall Watson */}
    </div>
  );
}
