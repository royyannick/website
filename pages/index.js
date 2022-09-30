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
      {/* <Publications /> */}
      <Contact />
    </div>
  );
}
