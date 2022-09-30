import React from "react";
import ProjectItem from "./ProjectItem";
import projectImgPlaceHolder from "../public/projects/project_placeholder_code.png";

import projectImgNeurofuntrade from "../public/projects/neurofuntrade.png";
import projectImgCrytpoUI from "../public/projects/cryptoui.png";
import projectImgNeuroTechX from "../public/projects/neurotechx.png";
import projectImgDLEEGReview from "../public/projects/dleegreview.png";
import projectImgNeureka from "../public/projects/neureka.png";
import projectImgNeuraldrift from "../public/projects/neuraldrift.png";
import projectImgDeepfakes from "../public/projects/deepfakes.gif";
import projectImgStar from "../public/projects/star.png";
import projectImgSynapets from "../public/projects/synapsets.png";
import projectImgWebsite from "../public/projects/website.png";
import projectImgStudentClubs from "../public/projects/studentclubs.gif";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
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
            title="NeuroTechX"
            backgroundImg={projectImgNeuroTechX}
            projectUrl="/projects/neurotech/neurotechx"
            tech="NeuroTech, Community"
            year="2015 - Present"
          />
          <ProjectItem
            title="DL-EEG Review"
            backgroundImg={projectImgDLEEGReview}
            projectUrl="/projects/neurotech/dl-eeg-review"
            tech="Deep Learning, EEG, Python"
            year="2019"
          />
          <ProjectItem
            title="CDA Review"
            backgroundImg={projectImgPlaceHolder}
            projectUrl="/projects/neurotech/cda-review"
            tech="EEG, Python, CDA"
            year="2022"
          />
          <ProjectItem
            title="Neureka Challenge"
            backgroundImg={projectImgNeureka}
            projectUrl="/projects/neurotech/neureka-challenge"
            tech="Deep Learning, EEG"
            year="2020"
          />
          <ProjectItem
            title="Personal Website"
            backgroundImg={projectImgWebsite}
            projectUrl="/projects/neurotech/website"
            tech="NextJS, Tailwind CSS"
            year="2022"
          />
          <ProjectItem
            title="NeuralDrift"
            backgroundImg={projectImgNeuraldrift}
            projectUrl="/projects/neurotech/neuraldrift"
            tech="EEG, Machine Learning, Python"
            year="2015"
          />
          <ProjectItem
            title="Deepfakes"
            backgroundImg={projectImgDeepfakes}
            projectUrl="/projects/deeplearning/deepfakes"
            tech="Deep Learning"
            year="2019"
          />
          <ProjectItem
            title="StaR"
            backgroundImg={projectImgStar}
            projectUrl="/projects/neurotech/star-eeglab"
            tech="EEG, Matlab"
            year="2015"
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
