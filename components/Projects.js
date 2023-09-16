import React from "react";
import ProjectItem from "./ProjectItem";
import projectImgPlaceHolder from "../public/projects/project_placeholder_code.png";

import projectImgD2Rjsp from "../public/thumbnails/d2rjsp.png";
import projectImgNeurofuntrade from "../public/thumbnails/neurofuntrade.png";
import projectImgCrytpoUI from "../public/thumbnails/cryptoui.png";
import projectImgNeuroTechX from "../public/thumbnails/neurotechx.jpg";
import projectImgNeureka from "../public/thumbnails/neureka.jpg";
import projectImgNeuraldrift from "../public/thumbnails/neuraldrift.jpg";
import projectImgDeepfakes from "../public/thumbnails/deepfakes.gif";
import projectImgSynapets from "../public/thumbnails/synapsets.jpg";
import projectImgWebsite from "../public/thumbnails/website.png";
import projectImgDLEEGPortal from "../public/thumbnails/dleegportal.jpg";
import projectImgStudentClubs from "../public/thumbnails/studentclubs.gif";
import projectImgIFT6266 from "../public/thumbnails/ift6266.jpg";
import projectImgConnectivity from "../public/thumbnails/connectivity.jpg";
import projectImgPhDClosedLoop from "../public/thumbnails/phdclosedloop.jpg";
import projectImgBrainfighta from "../public/thumbnails/brainfighta.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        {/*"max-w-[1240px] mx-auto px-2 py-16 lg:h-screen">*/}
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <ProjectItem
            title="NeuroFunTrade"
            backgroundImg={projectImgNeurofuntrade}
            projectUrl="/projects/blockchain/neurofuntrade"
            tech="Blockchain, NTF, Web3"
            year="2022"
          />
          <ProjectItem
            title="Crypto UI"
            backgroundImg={projectImgCrytpoUI}
            projectUrl="/projects/blockchain/crypto-ui"
            tech="Blockchain, Python, PyQt5"
            year="2022"
          />
          <ProjectItem
            title="D2RJSP Runes"
            backgroundImg={projectImgD2Rjsp}
            projectUrl="/projects/misc/d2rjsp"
            tech="Python, Streamlit, BeautifulSoup"
            year="2023"
          />
          <ProjectItem
            title="Personal Website"
            backgroundImg={projectImgWebsite}
            projectUrl="/projects/misc/website"
            tech="NextJS, Tailwind CSS"
            year="2022"
          />
          <ProjectItem
            title="Closed-Loop Systems"
            backgroundImg={projectImgPhDClosedLoop}
            projectUrl="/projects/neurotech/closed-loop"
            tech="EEG, BCI, Machine Learning, Python"
            year="2022"
          />
          <ProjectItem
            title="DL EEG Portal"
            backgroundImg={projectImgDLEEGPortal}
            projectUrl="/projects/neurotech/dl-eeg-portal"
            tech="EEG, Deep Learning, Research"
            year="2020"
          />
          <ProjectItem
            title="Neureka Challenge"
            backgroundImg={projectImgNeureka}
            projectUrl="/projects/neurotech/neureka-challenge"
            tech="Deep Learning, EEG"
            year="2020"
          />

          <ProjectItem
            title="Deepfakes"
            backgroundImg={projectImgDeepfakes}
            projectUrl="/projects/deeplearning/deepfakes"
            tech="Deep Learning"
            year="2019"
          />
          <ProjectItem
            title="IFT6266"
            backgroundImg={projectImgIFT6266}
            projectUrl="/projects/deeplearning/ift6266"
            tech="Deep Learning"
            year="2017"
          />
          <ProjectItem
            title="Brain Connectivity"
            backgroundImg={projectImgConnectivity}
            projectUrl="/projects/neurotech/connectivity"
            tech="EEG, SIFT, EEGLAB, mTBI, Connectivity"
            year="2016"
          />
          <ProjectItem
            title="BrainFighta"
            backgroundImg={projectImgBrainfighta}
            projectUrl="/projects/neurotech/brainfighta"
            tech="EEG, Machine Learning, Python, Unity"
            year="2016"
          />
          <ProjectItem
            title="NeuralDrift"
            backgroundImg={projectImgNeuraldrift}
            projectUrl="/projects/neurotech/neuraldrift"
            tech="EEG, Machine Learning, Python"
            year="2015"
          />
          <ProjectItem
            title="NeuroTechX"
            backgroundImg={projectImgNeuroTechX}
            projectUrl="/projects/neurotech/neurotechx"
            tech="NeuroTech, Community"
            year="2015 - Present"
          />
          <ProjectItem
            title="NeuroTech StudentClubs"
            backgroundImg={projectImgStudentClubs}
            projectUrl="/projects/neurotech/student-clubs"
            tech="NeuroTech, Community"
            year="2015"
          />
          <ProjectItem
            title="SynapsETS"
            backgroundImg={projectImgSynapets}
            projectUrl="/projects/neurotech/synapsets"
            tech="NeuroTech, Community"
            year="2015"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
