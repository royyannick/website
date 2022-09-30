import React from "react";
import PublicationItem from "./PublicationItem";
import PublicationImgPlaceHolder from "../public/projects/project_placeholder_code.png";

const Publications = () => {
  return (
    <div id="publications" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Publications
        </p>
        <h2 className="py-4">What I&apos;ve Published</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <PublicationItem
            title="DL-EEG Review"
            backgroundImg={PublicationImgPlaceHolder}
            projectUrl="/projects/blockchain/neurofuntrade"
            tech="Blockchain, NTF, Web3"
            year="2022"
          />
          <PublicationItem
            title="CDA Review"
            backgroundImg={PublicationImgPlaceHolder}
            projectUrl="/projects/blockchain/crypto-ui"
            tech="Blockchain, Python, PyQt5"
            year="2022"
          />
          <PublicationItem
            title="NeuroTechX"
            backgroundImg={PublicationImgPlaceHolder}
            projectUrl="/projects/neurotech/neurotechx"
            tech="NeuroTech, Community"
            year="2015 - Present"
          />
        </div>
      </div>
    </div>
  );
};

export default Publications;
