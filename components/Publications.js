import React from "react";
import PublicationItem from "./PublicationItem";
import PublicationImgPlaceHolder from "../public/projects/project_placeholder_code.png";

import publicationImgDLEEGReview from "../public/publications/dleegreview.png";
import publicationImgStar from "../public/publications/star.png";
import publicationImgNTXBook from "../public/publications/ntxbook.jpeg";
import publicationImgCDAReview from "../public/publications/cdareview.png";
import publicationImgScoring from "../public/publications/seizurescoring.png";
import publicationImg3DMOTEEG from "../public/publications/3dmoteeg.png";
import publicationImg3DMOTBCI from "../public/publications/3dmotbci.png";

const Publications = () => {
  return (
    <div id="publications" className="w-full p-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Publications
        </p>
        <h2 className="py-4">What I&apos;ve Published</h2>
        {/* className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3" */}
        <div>
          <PublicationItem
            title="Deep learning-based electroencephalography analysis: a systematic review"
            backgroundImg={publicationImgDLEEGReview}
            publicationUrl="https://iopscience.iop.org/article/10.1088/1741-2552/ab260c/meta"
            authors="Y. Roy, H. Banville, I. Albuquerque, A. Gramfort, T.H. Falk, J. Faubert"
            keywords="Deep Learning, EEG, Review"
            year="2019"
          />

          <PublicationItem
            title="Is the Contralateral Delay Activity (CDA) a robust neural correlate for Visual Working Memory (VWM) tasks? A reproducibility study"
            backgroundImg={publicationImgCDAReview}
            publicationUrl="https://onlinelibrary.wiley.com/doi/10.1111/psyp.14180"
            keywords="EEG, CDA, VWM, Reproducibility, Python"
            authors="Yannick Roy and Jocelyn Faubert"
            year="2022"
          />

          <PublicationItem
            title="Significant changes in EEG neural oscillations during different
            phases of three-dimensional multiple object tracking task
            (3D-MOT) imply different roles for attention and working
            memory."
            backgroundImg={publicationImg3DMOTEEG}
            publicationUrl="https://arxiv.org/abs/2207.14470"
            keywords="EEG, 3D-MOT, Attention, Working Memory, Neural Oscillations"
            authors="Yannick Roy and Jocelyn Faubert"
            year="2022"
          />

          <PublicationItem
            title="Passive EEG Brain-Computer Interface (BCI) for a 3D Multiple Object Tracking (3D-MOT) task"
            backgroundImg={publicationImg3DMOTBCI}
            publicationUrl="/"
            keywords="BCI, EEG, 3D-MOT, Machine Learning"
            authors="Yannick Roy and Jocelyn Faubert"
            year="2022"
          />

          <PublicationItem
            title="The Future of NeuroTechnology"
            backgroundImg={publicationImgNTXBook}
            publicationUrl="https://www.amazon.com/Neurotech-Primer-Beginners-Everything-Neurotechnology/dp/B09CKP1D66"
            authors="NeuroTechX - Community Effort"
            keywords="NeuroTechnology, Introduction, Past, Present, Future"
            year="2021"
          />

          <PublicationItem
            title="Validation of temporal scoring metrics for automatic seizure detection"
            backgroundImg={publicationImgScoring}
            publicationUrl="https://ieeexplore.ieee.org/abstract/document/9353631"
            keywords="Deep Learning, EEG, Scoring, Metrics, Seizure Detection, Big Data"
            authors="V. Shah, I. Obeid, J. Picone, G. Ekladious, R. Iskander, Y. Roy"
            year="2020"
          />

          <PublicationItem
            title="StaR: An EEGLAB Framework for the Measure Projection Toolbox (MPT) Statistical Analyses to be Performed in R"
            backgroundImg={publicationImgStar}
            publicationUrl="https://link.springer.com/chapter/10.1007/978-981-13-1642-5_66"
            keywords="Mixed-Models (MME), R, EEG, EEGLAB, MPT, Statistical Analysis"
            authors="Y. Roy, JC Piponnier, J. Faubert"
            year="2016"
          />

          {/*
        <PublicationItem
            title="EEG and BCI Crowdfunding Landscape"
            backgroundImg={PublicationImgPlaceHolder}
            publicationUrl="/publications/star-eeglab"
            keywords="Mixed-Models, R"
            authors="Y. Roy et al."
            year="2017"
          />

          <PublicationItem
            title="PhD Thesis: Cognitive Training Optimization 
            with a Closed-Loop System"
            backgroundImg={PublicationImgPlaceHolder}
            publicationUrl="/publications/star-eeglab"
            keywords="..."
            authors="Y. Roy"
            year="2022"
        />
        */}

          <div className="py-4 text-center">
            {" "}
            <h3>
              More on{" "}
              <a
                href="https://scholar.google.com/citations?user=x5c5jRgAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5651e5]"
              >
                Google Scholar
              </a>{" "}
              or{" "}
              <a
                href="https://www.researchgate.net/profile/Yannick-Roy-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5651e5]"
              >
                Research Gate
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
