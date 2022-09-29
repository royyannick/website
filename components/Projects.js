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
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <ProjectItem
            title="NeuroFunTrade"
            backgroundImg="/../public/projects/neurofuntrade.png"
            projectUrl="/projects/blockchain/neurofuntrade"
            tech="Blockchain, NTF, Web3"
            year="2022"
          />
          <ProjectItem
            title="Crypto UI"
            backgroundImg="/../public/projects/cryptoui.png"
            projectUrl="/projects/blockchain/crypto-ui"
            tech="Blockchain, Python, PyQt5"
            year="2022"
          />
          <ProjectItem
            title="NeuroTechX"
            backgroundImg="/../public/projects/neurotechx.png"
            projectUrl="/projects/neurotech/neurotechx"
            tech="NeuroTech, Community"
            year="2015 - Present"
          />
          <ProjectItem
            title="DL-EEG Review"
            backgroundImg="/../public/projects/dleegreview.png"
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
            backgroundImg="/../public/projects/neureka.png"
            projectUrl="/projects/neurotech/neureka-challenge"
            tech="Deep Learning, EEG"
            year="2020"
          />
          <ProjectItem
            title="NeuralDrift"
            backgroundImg="/../public/projects/neuraldrift.png"
            projectUrl="/projects/neurotech/neuraldrift"
            tech="EEG, Machine Learning, Python"
            year="2015"
          />
          <ProjectItem
            title="Deepfakes"
            backgroundImg="/../public/projects/deepfakes.gif"
            projectUrl="/projects/deeplearning/deepfakes"
            tech="Deep Learning"
            year="2019"
          />
          <ProjectItem
            title="StaR"
            backgroundImg="/../public/projects/star.png"
            projectUrl="/projects/neurotech/star-eeglab"
            tech="EEG, Matlab"
            year="2015"
          />
          <ProjectItem
            title="NeuroTech StudentClubs"
            backgroundImg="/../public/projects/studentclubs.gif"
            projectUrl="/projects/neurotech/student-clubs"
            tech="NeuroTech, Community"
            year="2015"
          />
          <ProjectItem
            title="SynapsETS"
            backgroundImg="/../public/projects/synapsets.png"
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
