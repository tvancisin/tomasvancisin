
export default function Home() {
  return (
    <div className="bg-black text-gray-400 font-sans quicksand">
      <div className="p-6 sm:p-10 md:p-16 flex flex-wrap">

        <div className="w-full md:w-1/4 md:pr-10 order-1">
          <div className="max-w-md md:float-right md:text-right leading-loose tracking-tight md:sticky md:top-0 ">
            <p className="text-3xl my-4 md:my-5">Tomas Vancisin</p>
            <p className="text-sm my-4 md:my-5"><b>Research Associate in Interactive<br /> Data Visualization</b><br />School of Law (PeaceRep)<br />University of Edinburgh</p>
            <p className="md:my-4 text-sm"><b>Research Interests:</b><br /> Digital Humanities<br />Information Visualization <br /> Digital Heritage <br /> PeaceTech </p>
            <img className="w-3/5 inline-block mt-2" src="/unilogo.png" />
          </div>
        </div>

        <div className="w-full md:w-3/4 lg:pr-28 order-1 md:order-2 text-gray-300">
          <div className="leading-loose tracking-tight">
            <h1 className="text-2xl mt-10 mb-5">RESEARCH</h1>

            <h1 className="text-xl font-bold text-left">Peace and Conflict Resolution Evidence Platform (PeaceRep)</h1>
            <p className="text-s font-bold" >School of Law, University of Edinburgh</p>

            <div className="mt-1 mb-5 text-sm">I am currently working at the University of Edinburgh, focusing on visualization of transition trajectories
              and the mediation space of peace and transition processes.
              <div className="grid grid-cols-1 justify-items-center">
                <div className="mt-2 mb-1"><a href="https://globe-tracker.onrender.com/" target="blank"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/globe_peace_min.jpg" /></a></div>
                <div className="text-xs text-center">Formal peace agreements signed and the levels of
                  estimated conflict-related fatalities per country in the last 12 months.</div>
              </div>
            </div>

            <div className="mb-8 text-sm">
              <div className="grid grid-cols-1 justify-items-center">
                <div className="mt-2 mb-1"><a href="https://tvancisin.github.io/local_agreements/" target="blank"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/local_peace_min.jpg" /></a></div>
                <div className="text-xs text-center">Geospatial visualization of local peace agreements from Syria.
                </div>
              </div>
            </div>

            <div className="mb-8 text-sm">
              <div className="grid grid-cols-1 justify-items-center">
                <div className="mt-2 mb-1"><a href="https://tvancisin.github.io/peace_scroll/" target="blank"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/scroll_peace_min.jpg" /></a></div>
                <div className="text-xs text-center">Scrollytelling visualization of Russia and China as third party signatories in inter/national
                  peace agreements.
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-2">
              Publications:
            </h3>
            <div className="border-b border-gray-800 mt-1 mb-10">
              <div className="text-sm mb-3 italic">
                Henry, N., Vancisin, T. (2025). <a href="https://link.springer.com/chapter/10.1007/978-3-031-93221-2_3" target="blank" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">Visualizing Peace and Transition Process Trajectories: Enhancing Decision-Making Through PeaceTech and Iterative Design.</a> In: Schrepp, M. (eds) Design, User Experience, and Usability. HCII 2025. Lecture Notes in Computer Science, vol 15794. Springer, Cham. https://doi.org/10.1007/978-3-031-93221-2_3
              </div>
            </div>


            <h1 className="text-xl mt-5 text-left font-bold">Legacies of the Empire</h1>
            <p className="text-s font-bold">School of History, University of St Andrews</p>
            <div className="mt-1 mb-5 text-sm">In summer 2023 I worked as a postgraduate research assistant for
              the Legacies of the Empire Project, exploring how the University of St Andrews benefited from the British colonial past.
              Using the database I developed during my PhD, I visualized birth locations, career paths, and alumni occupations in the British colonies.
              <div className="grid grid-cols-1 justify-items-center">
                <div className="mt-2 mb-1"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/legacies.png" /></div>
                <div className="text-xs text-center">Career paths of St Andrews students travelling to
                  and from the British colonies between 1700 and 1897.</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center">
                <div className="mt-2 mb-1"><a href="https://tvancisin.github.io/colonies/" target="blank"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/empire.png" /></a></div>
                <div className="text-xs text-center">Web-based interactive visualization showing origins and careers of St Andrews students travelling to/from the colonies.</div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-2">
              Publications:
            </h3>
            <div className="border-b border-gray-800 mt-1 mb-10">
              <div className="mt-1 mb-3">
                <div className="text-sm mb-3 italic">
                  Vancisin, T. & Fyfe, A. (2025). <a href="https://research-repository.st-andrews.ac.uk/handle/10023/31625" target="blank" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">St Andrews students and the Empire, 1700-1897 : Methods and Limitations.</a> Legacies of Empire working papers, University of St Andrews, pp. 1-10.
                </div>
              </div>
              <div className="mt-1 mb-3">
                <div className="text-sm mb-3 italic">
                  Fyfe, A., Robinson, I., Vancisin, T., Leith, S. J. H., & Ylitalo, M. W. (2025). <a href="https://research-portal.st-andrews.ac.uk/en/publications/the-university-of-st-andrews-and-the-legacies-of-empire-1700-1900" target="blank" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">The University of St Andrews and the legacies of Empire, 1700-1900.</a> University of St Andrews. https://doi.org/10.5281/zenodo.14975043
                </div>
              </div>
            </div>


            <h1 className="text-xl mt-5 text-left font-bold">PhD Research</h1>
            <p className="text-s font-bold">School of Computer Science, University of St Andrews</p>
            <div className="mb-8 text-sm">
              My research is at the intersection of Information Visualization, Digital
              Humanities, and History. I work with historical student and staff
              biographical records from the University of St Andrews spanning the period 1579-1897, and
              I have been focusing on visualizing the transformations these records have gone through
              in the past century (manual transcription, content expansion, digitization etc.).
              The aim of this work is to highlight transparency, emphasize people&apos;s labor, and
              provide more critical understanding of such historical collections.
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div className="mt-2 mb-1"><a href="https://provenance.tomasvancisin.co.uk"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/scroll.PNG" /></a></div>
                <div className="text-xs text-center">Web-based visualization of the University records' transformations 1888 - 2022.</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div className="mt-2 mb-1"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/bars.JPG" /></div>
                <div className="text-xs text-center">First visualization prototype of the University records' transformations 1888 - 2022</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div className="mt-2 mb-1"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/vanc.JPG" /></div>
                <div className="text-xs text-center">Early exploration of student birth locations and college affiliation 1747 - 1897 (Tableau).</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div className="mt-2 mb-1"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/split.JPG" /></div>
                <div className="text-xs text-center">Emphasizing differences between current political map of the word and the period during the British empire.</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div className="mt-2 mb-1"><img className="rounded-sm md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/map_network.JPG" /></div>
                <div className="text-xs text-center">Exploring student paths to other universities in the UK and Europe.</div>
              </div>

              <h3 className="text-lg font-semibold mt-2mb-2">
                Publications:
              </h3>
              <div className="border-b border-gray-800 mt-1 mb-10">
                <div className="text-sm mb-3 italic">
                  Vancisin, T., Clarke, L., Orr, M., & Hinrichs, U. (2025). <a href="https://journals.aau.dk/index.php/jovi/article/view/8436" target="blank" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">Provenance Visualization as an Entry Point to the History and Curation of Information Collections.</a> Journal of Visualization and Interaction. 1, 1 (Apr. 2025). DOI:https://doi.org/10.54337/jovi.v1i1.8436.
                  Press.
                </div>
                <div className="text-sm mb-3 italic">
                  Vancisin, T., Clarke, L., Orr, M., & Hinrichs, U. (2023). <a href="https://academic.oup.com/dsh/advance-article/doi/10.1093/llc/fqad020/7140400" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">Provenance Visualization:
                    Tracing People, Processes and Practices Through a Data-Driven Approach to
                    Provenance.</a> In 2023 Digital Scholarship in the Humanities. Oxford University
                  Press.
                </div>
                <div className="text-sm mb-3 italic">
                  Vancisin, T., Orr, M., & Hinrichs, U. (2020, October). <a href="https://ieeexplore.ieee.org/document/9308105" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">Externalizing Transformations of Historical Documents: Opportunities for Provenance-Driven
                    Visualization.</a> In 2020 IEEE 5th Workshop on Visualization for the Digital Humanities (VIS4DH) (pp. 36-42). IEEE.
                </div>
                <div className="mt-1 mb-3 italic">
                  Vancisin, T., Orr, M., & Hinrichs, U. (2020). <a href="https://dh2020.adho.org/wp-content/uploads/2020/07/502_IlluminatingPastLaborMakingTransformationProcessesofHistoricalDocumentsVisible.html" className="text-blue-500 hover:text-blue-800 visited:text-purple-600" >Illuminating Past Labor: Making
                    Transformation Processes of Historical Documents Visible.</a> In Proceedings of
                  Digital Humanities 2020 (DH20).
                </div>
                <div className="text-sm mb-3 italic">
                  Vancisin, T., Crawford, A., Orr, M. M., & Hinrichs, U. (2018). <a href="https://doi.org/10.6084/m9.figshare.6104699" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">From People
                    to Pixels: Visualizing Historical University Records.</a> In Transimage 2018:
                  Proceedings of the 5th Biennial Transdisciplinary Imaging Conference 2018 (pp.
                  41-57)
                </div>
              </div>
            </div>

            <h1 className="text-xl mt-5 text-left font-bold">Lost Detectives</h1>
            <p className="text-s font-bold">School of Modern Languages, University of St Andrews</p>
            <div className="mb-8 text-sm">
              During my PhD research I worked as a research assistant for the Lost Detectives project
              at the School of Modern Languages in St Andrews. The aim of this Knowledge Exchange and
              Impact project was to bring works of nineteenth-century Russian crime fiction to greater
              public prominence through adaptation.
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div className="text-xs mt-3"><a href="https://lostdetectives.wp.st-andrews.ac.uk/" target="blank"><img className="rounded-md md:mt-5 opacity-90 hover:opacity-100 transition-all" src="/detectives.png" /></a></div>
                <div className="text-xs text-center">Illustration (Carol Adlam) for the Lost Detectives project and the official website developed by me.</div>
              </div>
            </div>

          </div>

          <div className="w-full md:w-3/4 order-2 md:order-4">
            <h1 className="text-xl my-2 text-left">About Me</h1>
            <div className="mb-8 text-sm">
              For more information about me and my work, here is my <a href="/tomas_vancisin_cv.pdf" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">CV</a>.
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
