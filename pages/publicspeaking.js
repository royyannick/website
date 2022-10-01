import Image from "next/image";

import aboutImgHomonumericus from "../public/yroy/homonumericus.png";

export default function PublicSpeaking() {
  return (
    <div className="grid h-screen py-20 place-items-center">
      <h2 className="items-center py-6 text-center">
        Talks, Interviews, Conferences, Podcasts, TV Shows
      </h2>
      <div>
        <Image
          className="py-4 shadow-xl rounded-xl shadow-gray-300"
          src={aboutImgHomonumericus}
          width="650"
          height="500"
          alt="/"
        ></Image>
        <p className="text-center">
          <i>Article on Transhumanism in a French Magazine in Montreal</i>
        </p>
      </div>
      <hr />
      <div className="divide-solid">
        <ul>
          <li className="p-4 text-gray-600">
            <a href="https://ici.tou.tv/comment-devenir-une-personne-parfaite/S01E01">
              [TV] – Véro.TV – Comment devenir une personne parfaite
              (intelligence) (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.mcgill.ca/hbhl/channels/event/innovation-and-entrepreneurship-researchers-303511">
              [Talk] McGill University – Entrepreneurship &amp; Innovation
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://waterfront-magazine.com/becoming-cyborg">
              [Interview] Waterfront Magazine – Becoming Cyborg (Written)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://iopscience.iop.org/article/10.1088/1741-2552/ab260c">
              [Talk] IEEE Brain Data Bank Challenge – Deep Learning &amp; EEG
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.youtube.com/watch?v=cFa7FpWUW4Q">
              [Prize] Forces AVENIR – NeuroTechX Student Clubs{" "}
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.youtube.com/watch?v=JlBniXvRe74&feature=youtu.be">
              [Talk] BCI Samara (Russia) – Consumer EEG Devices{" "}
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://iopscience.iop.org/article/10.1088/1741-2552/ab260c">
              [Talk] BCI Samara (Russia) – Deep Learning &amp; EEG{" "}
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.youtube.com/watch?v=DSeZWCh81ao&feature=youtu.be&t=6990">
              [Panel] BCI Samara (Russia) – Brain-Computer Interfaces (Russian)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.youtube.com/watch?v=JsRopp95W3Y&t=2s">
              [Talk] Hacking Health @ Google – Humanity 2.0
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.youtube.com/watch?v=Jh1Lut0JnxI">
              [Talk &amp; Panel] Movin’On Summit – Future of Transportation
              &amp; Related Tech (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://arxiv.org/abs/1901.05498">
              [Talk] McGill (MNI) – Deep Learning &amp; EEG{" "}
            </a>
          </li>

          <li className="p-4 text-gray-600">
            [Talk] Microsoft Montreal – Brain-Computer Interfaces
          </li>

          <li className="p-4 text-gray-600">
            [Talk] AESTQ – Neurotechnology &amp; Education (French)
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.youtube.com/watch?v=6W0tiJombN8">
              [Talk] DHT Speech – Transhumanism and Neurotechnology
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.facebook.com/conferences.enquetes.scientifiques/videos/2031066816934011">
              [Talk] UQAM – Le Coeur des Sciences – Ton ordinateur lira dans tes
              pensées. (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://ici.tou.tv/sexplora/S03E03">
              [TV] Sexplora – Sexe et Technologie. (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="https://www.metro.news/can-you-rewire-your-brain-as-a-shortcut-to-health/884556/">
              [Interview] UK Metro News – Can you rewire your brain as a
              shortcut to health?
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://taveshow.com/taves-talks-tech-bcipanel/">
              [Panel] TAVES (Consumer Show) – Artificial Intelligence and Brain
              Computer Interfaces.
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://www.clg.qc.ca/fileadmin/clg/DM/2017-10-05_programmationRDVSH.pdf">
              [Panel] Collège Lionel-Groulx – Jeux Vidéos (leur impact sur le
              cerveau) (French).
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://ici.radio-canada.ca/premiere/emissions/bienvenue-en-2067/segments/entrevue/33217/reflexion-limitations-motivations-technologie-vr-cellulaire">
              [Radio] Bienvenue en 2067 with Jean-Rene Dufort – Radio Canada
              (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://ici.radio-canada.ca/premiere/emissions/le-15-18/episodes/379147/audio-fil-du-lundi-17-avril-2017/26">
              [Radio] Un Hacker féru de neurotechnologie: Rencontre avec Yannick
              Roy – Radio Canada, le 15-18 (@17h35) (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://www.quantumrun.com/podcast/episodes/future-of-neurotechnology-with-yannick-roy/">
              [Podcast] QuantumRun – Future of Neurotechnology with Yannick Roy.
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://ici.radio-canada.ca/nouvelle/1027097/pourrons-nous-vivre-140-ans-bar-sciences-montreal-annees-lumiere-vieillissement-age-societe-genetique-biologie">
              [Panel] Centre des Sciences / Québec Science – Allons-nous vivre
              jusqu’à 140 ans.
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://nouvelles.umontreal.ca/article/2017/04/02/un-hacker-qui-etudie-au-doctorat/">
              [Interview] Université de Montréal – Un “Hacker” qui étudie au
              Doctorat.
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://www.quebecscience.qc.ca/reportage_qs/Le-pouvoir-du-mental">
              [Interview] Québec Science – Le pouvoir du mental (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="">
              [Interview] Dernière Heure (DH) – Homo-Numericus (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://www.choq.ca/emissions-details/loeuf-ou-la-poule">
              [Interview / Podcast] Oeuf ou la Poule, CHOQ.CA – Radio UQAM
              (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://sapienlabs.co/neurotechx/">
              [Interview] Sapien Labs – NeuroTechX{" "}
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://www.fi.co/posts/14551">
              [Award / Featured] Founder Institute – Champions of 2015
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://www.lesaffaires.com/blogues/julien-brault/jai-pris-un-cafe-avec-un-transhumaniste-et-jetais-presque-daccord-avec-lui/579368">
              [Interview] Les Affaires – Tranhusmaniste (French)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://www.latourneedesentrepreneurs.org/edition-2015/alma/">
              [Event] Tournée des Entrepreneurs – Alma (2015)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://www.dawsoncollege.qc.ca/centre-for-innovation-and-entrepreneurship-education/eweek-calendar-2015/">
              [Event] eWeek – Dawson (2015)
            </a>
          </li>

          <li className="p-4 text-gray-600">
            [TV] MaTV: Billboard Montreal (October 2015)
          </li>

          <li className="p-4 text-gray-600">
            <a href="http://genial.telequebec.tv/emission/popup-video-mp4.cshtml?url=http://genial.telequebec.tv/zecms/web/upload/cms/videos/ep120-bande-annonce.mp4&image=/zecms/web/upload/site/emission/138/ep120-138-1442511909-poster.jpg">
              [TV] Tele-Quebec: Genial (2015)
            </a>
            <a href="https://cve.grics.ca/fr/1180/46062">
              (full episode available here)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
