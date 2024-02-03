//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graduate Research Assistant, UMass Amherst",
    place: " Polymer Science and Engineering Department, <a href = 'https://www.pse.umass.edu/faculty/researchgroup/coughlin/people-' target='_blank' >Coughlin Research Group</a> &ensp;<a href = 'https://www.youtube.com/watch?v=-sn4LfPY5es&ab_channel=PolymerScience%26EngineeringatUMassAmherst' target='_blank'><img src='assets/images/experience-page/youtube.png' height=35></a>",
    time: "(Aug 2019 - Present)",
    desp: "<li> Designed and executed synthetic methodologies and characterization techniques from scratch for a <strong>million-dollar</strong> project funded by the <strong>Department of Energy (DOE)</strong>, leading to the publication of several manuscripts in <strong>high-impact journals</strong>, contributing to a proposed grant of another million dollars.</li> <li> Elucidated the performance of a new class of <strong>polyethylene copolymers</strong> using advanced analytical techniques, such as NMR, FTIR, DSC, TGA, SEM, TEM, AFM, DMA, rheology, electrochemical analysis (EIS), and texture analyzer (TA).</li> <li>Discovered a groundbreaking class of materials derived from <strong>polyethylene</strong> featuring customizable properties such as <strong>separator functionality, self-healing capabilities, adhesive strength, and mechanical property enhancements</strong>. Successfully achieved these attributes through precise chemical manipulations, showcasing a comprehensive understanding of material science.</li><li> Successfully designed functional <strong>siloxane-based ATRP initiators</strong> to synthesize PS and PMMA polymers with a possibility of in-situ compatibilization of these homopolymers in mixed plastic waste stream resulting in block copolymer formation by cleavage and exchange of the active linker.</li>",
  },
  {
    title: "Graduate Research Assistant",
    place: "Indian Institute of Science Education and Research, Kolkata <a href = 'https://alumni.iiserkol.ac.in/f/quarantinedays-from-roshni-john-13493'><img src='assets/images/experience-page/stack-of-photos.png' height=35></a>",
    time: "(Aug 2017 - May 2019)",
    desp:"<li> Crafted biodegradable and biocompatible <strong>self-assembled superstructures</strong> by synthesizing poly(ethylene glycol) and poly(ε-caprolactone) using the powerful azide-alkyne click chemistry (CuAAC).</li><li>Conducted a thorough characterization, unraveling their distinctive morphological features poised for <strong>cutting-edge advancements</strong> in targeted drug delivery for cancer cells</li>",
  },
  {
    title: "Summer Research Intern",
    place: "Indian Institute of Technology, Madras",
    time: "(May 2017 - July 2017)",
    desp:"<li> Synthesized a new class of <strong>Polyethers</strong> from Carbohydrate-based epoxides.</li><li>Included the <strong>monosaccharide-based epoxide monomer</strong> which was not used then for the preparation of polyethers, with the sugar units incorporated into the main polymer chain.</li>",
  },
  {
    title: "Summer Research Intern",
    place: "Indian Institute of Technology, Bombay",
    time: "(May 2016 - July 2016)",
    desp:"<li> Synthesized alkyl-chain separated <strong>triphenylbenzene – carbazole conjugates</strong> and their derived polymers, which are candidates for sensory, electrical, and optical materials.</li><li>Successfully demonstrated the effectiveness of <strong>Triarylbenzene and carbazoles</strong> as sensors for detecting polynitroaromatic analytes (PA, DNT, p-DNB, and m-DNB).</li>",
  },
{
    title: "Graduate Teaching Assistant",
    place: "University of Massachusetts, Amherst&ensp;",
    time: "(Fall 2019 - Present)",
    desp: "\
    <li>Teaching Assistant: PSE 602 -  Polymer Characterization Laboratory \
      <ul style='min-height: 0; padding-top: 8px !important;'>\
        <li style='font-size:0.9em'>Assisted in designing and conducting Gel Permeation Chromatography laboratory experiments, equipping students with hands-on polymer analysis skills</li>\
        <li style='font-size:0.9em'>Fostered an engaging learning environment by encouraging discussions and provided guidance on data analysis and interpretation to deduce vital molecular weight information</li>\
      </ul>\
    </li>\
    ",
//     desp: "<ul>\
//   <li>Coffee</li>\
//   <li>Tea\
//     <ul>\
//       <li>Black tea</li>\
//       <li>Green tea</li>\
//     </ul>\
//   </li>\
//   <li>Milk</li>\
// </ul>"
  },
{
    title: "Graduate Teaching Assistant",
    place: "Indian Institute of Science Education and Research, Kolkata&ensp;",
    time: "(Spring 2018, Spring 2019)",
    desp: "\
    <li>Teaching Assistant: Organic Chemistry Laboratory \
      <ul style='min-height: 0; padding-top: 8px !important;'>\
        <li style='font-size:0.9em'>Led the weekly tutorial with over 30 undergraduate students and conducted live experiments accompanying the lecture.</li>\
      </ul>\
    </li>\
    ",
//     desp: "<ul>\
//   <li>Coffee</li>\
//   <li>Tea\
//     <ul>\
//       <li>Black tea</li>\
//       <li>Green tea</li>\
//     </ul>\
//   </li>\
//   <li>Milk</li>\
// </ul>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, place, time, desp }) =>
      (output += `
      <ul>
      <li class="card card1">
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
