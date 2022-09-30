import React from "react";
import PublicationItem from "./PublicationItem";
import PublicationImgPlaceHolder from "../public/projects/project_placeholder_code.png";

import publicationImgDLEEGReview from "../public/projects/dleegreview.png";
import publicationImgStar from "../public/projects/star.png";

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
            backgroundImg={publicationImgDLEEGReview}
            publicationUrl="/publications/dl-eeg-review"
            keywords="Deep Learning, EEG, Review"
            year="2019"
          />
          <PublicationItem
            title="CDA Review"
            backgroundImg={PublicationImgPlaceHolder}
            publicationUrl="/publications/cda-review"
            keywords="CDA, EEG, Review"
            year="2022"
          />
          <PublicationItem
            title="EEG DL Scoring"
            backgroundImg={PublicationImgPlaceHolder}
            publicationUrl="/publications/scoring"
            keywords="Deep Learning, EEG, Scoring"
            year="2020"
          />
          <PublicationItem
            title="StaR (Statistical Framework)"
            backgroundImg={publicationImgStar}
            publicationUrl="/publications/star-eeglab"
            keywords="Mixed-Models, R"
            year="2016"
          />
        </div>
      </div>
    </div>
  );
};

export default Publications;
