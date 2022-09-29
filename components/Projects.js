import React from "react";
import ProjectItem from "./ProjectItem";
import projectImgPlaceHolder from "../public/projects/project_placeholder_code.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="NeuroFunTrade"
            backgroundImg={projectImgPlaceHolder}
            projectUrl="/projects/blockchain/neurofuntrade"
            tech="Blockchain, NTF, Web3"
            year="2022"
          />
          <ProjectItem
            title="Crypto UI"
            backgroundImg={projectImgPlaceHolder}
            projectUrl="/projects/blockchain/crypto-ui"
            tech="Blockchain, Python, PyQt5"
            year="2022"
          />
          <ProjectItem
            title="DL-EEG Review"
            backgroundImg={projectImgPlaceHolder}
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
            backgroundImg={projectImgPlaceHolder}
            projectUrl="/projects/neurotech/neureka-challenge"
            tech="Deep Learning, EEG"
            year="2020"
          />
          <ProjectItem
            title="NeuralDrift"
            backgroundImg={projectImgPlaceHolder}
            projectUrl="/projects/neurotech/neuraldrift"
            tech="EEG, Machine Learning, Python"
            year="2015"
          />
          <ProjectItem
            title="Deepfakes"
            backgroundImg={projectImgPlaceHolder}
            projectUrl="/projects/deeplearning/deepfakes"
            tech="Deep Learning"
            year="2019"
          />
          <ProjectItem
            title="StaR"
            backgroundImg={projectImgPlaceHolder}
            projectUrl="/projects/neurotech/star-eeglab"
            tech="EEG, Matlab"
            year="2015"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
