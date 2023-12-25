
export default function Home() {
  return (
    <div className="bg-black text-gray-400 font-sans quicksand">
      <div className="p-6 sm:p-10 md:p-16 flex flex-wrap">

        <div className="w-full md:w-1/4 md:pr-10 order-1">
          <div className="max-w-md md:float-right md:text-right leading-loose tracking-tight md:sticky md:top-0 ">
            <p className="text-3xl my-4 md:my-5">Tomas Vancisin</p>
            <p className="text-sm my-4 md:my-5"><b>Research Associate in Interactive Data Visualisation</b><br />School of Law<br />University of Edinburgh</p>
            <p className="text-sm my-4 md:my-5"><b>PhD researcher</b> <br /> School of Computer Science <br /> University of St Andrews<br />
              <a href="https://sachi.cs.st-andrews.ac.uk/" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">St Andrews HCI Research Group (SACHI)</a>
            </p>

            {/* <p className="text-xl my-4 md:my-5">Keywords</p> */}
            <p className="md:my-4 text-sm"><b>Research Interests:</b><br /> Digital Humanities<br />Information Visualization <br /> Digital Heritage <br /> </p>
            <img className="w-3/5 inline-block" src="/uni_logo.png" />

            {/* <ul className="flex flex-wrap justify-between flex-col">
              <li><a href="#visualization" className="nav">Visualization</a></li>
              <li><a href="#" className="nav">Publications</a></li>
              <li><a href="#" className="nav">CV</a></li>
              <li><a href="#" className="nav">Contact</a></li>
            </ul> */}
          </div>
        </div>

        <div className="w-full md:w-3/4 lg:pr-28 order-1 md:order-2 text-gray-300">
          <div className="leading-loose tracking-tight">
            <h1 className="text-2xl my-5 text-center">RESEARCH</h1>

            <h1 className="text-xl my-2 text-left">Legacies of the Empire <p className="text-xs">School of History, University of St Andrews</p></h1>
            <div className="mb-8 text-sm">Currently working as
              a postgraduate research assistant for the Legacies of the Empire Project,
              exploring how the University of St Andrews has benefited from UK&apos;s colonial past.
              Using the database I developed during my PhD, I visualize birth locations, career paths,
              and occupations of St Andrews alumni in the British colonies.
              <div className="grid grid-cols-1 justify-items-center">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:opacity-100 transition-all" src="/legacies.png" /></div>
                <div className="text-xs mt-3">Career paths of St Andrews students travelling to
                  and from the British colonies between 1700 and 1897.</div>
              </div>
            </div>

            <h1 className="text-xl my-2 text-left">PhD Research<p className="text-xs">School of Computer Science, University of St Andrews</p></h1>
            <div className="mb-8 text-sm">
              My research is at the intersection of Information Visualization, Digital
              Humanities, and History. I work with historical student and staff
              biographical records from the University of St Andrews spanning the period 1579-1897, and
              I have been focusing on visualizing the transformations these records have gone through
              in the past century (manual transcription, content expansion, digitization etc.).
              The aim of this work is to highlight transparency, emphasize people&apos;s labor, and
              provide more critical understanding of such historical collections.
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:opacity-100 transition-all" src="/bars.JPG" /></div>
                <div className="text-xs mt-3">Visualizing the transformations of the University records 1888 - 2022</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><a href="https://provenance.tomasvancisin.co.uk"><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/scroll.PNG" /></a></div>
                <div className="text-xs mt-3">Visualizing the transformations of the University records 1888 - 2022 and the information within the records.</div>
              </div>
              <h3 className="text-lg font-semibold mt-2mb-2">
                Publications:
              </h3>
              <div className=" border-b border-t border-gray-800 py-5 ">
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
                <div className="text-sm italic">
                  Vancisin, T., Orr, M., & Hinrichs, U. (2020). <a href="https://dh2020.adho.org/wp-content/uploads/2020/07/502_IlluminatingPastLaborMakingTransformationProcessesofHistoricalDocumentsVisible.html" className="text-blue-500 hover:text-blue-800 visited:text-purple-600" >Illuminating Past Labor: Making
                    Transformation Processes of Historical Documents Visible.</a> In Proceedings of
                  Digital Humanities 2020 (DH20).
                </div>
              </div>
            </div>
            <div className="mb-5 mt-8 text-sm">
              Apart from the transformations of the records and ways in which they can be brought to the fore
              throught visualization, I also developed a large variety of visualizations to enable
              studying the information within the historical records from new perspectives.
            </div>
            <div className="grid grid-cols-1 justify-items-center mb-8">
              <div><img className="rounded-md md:mt-5 opacity-80 hover:opacity-100 transition-all" src="/vanc.JPG" /></div>
              <div className="text-xs mt-3">Using Tableau to visualize students&apos; birth locations and college affiliation 1747 - 1897.</div>
            </div>
            <div className="grid grid-cols-1 justify-items-center mb-8">
              <div><img className="rounded-md md:mt-5 opacity-80  hover:opacity-100 transition-all" src="/graduates.JPG" /></div>
              <div className="text-xs mt-3">Using D3, Leaflet and Marker-Clustering to visualize graduates of the University 1747 - 1897.</div>
            </div>
            <div className="grid grid-cols-1 justify-items-center mb-8">
              <div><a href="https://history.tomasvancisin.co.uk"><img className="rounded-md md:mt-5 hover:scale-105 opacity-80 hover:opacity-100 transition-all" src="/split.JPG" /></a></div>
              <div className="text-xs mt-3">Emphasizing differences between current political map and a map from the period when
                the British empire was at its greatest.</div>
            </div>
            <div className="grid grid-cols-1 justify-items-center mb-8">
              <div><img className="rounded-md md:mt-5 opacity-80 hover:opacity-100 transition-all" src="/geojson.jpg" /></div>
              <div className="text-xs mt-3">Using GeoJSON and D3 to map the development of academic networks.</div>
            </div>
            <div className="grid grid-cols-1 justify-items-center mb-8">
              <div><img className="rounded-md md:mt-5 opacity-80 hover:opacity-100 transition-all" src="/round_bundle.JPG" /></div>
              <div className="text-xs mt-3">Exploring career locations network through edge-bundling in D3.</div>
            </div>
            <div className="grid grid-cols-1 justify-items-center mb-8">
              <div><img className="rounded-md md:mt-5 opacity-80 hover:opacity-100 transition-all" src="/map_network.JPG" /></div>
              <div className="text-xs mt-3">Exploring student paths to other universities in the UK and Europe using Leaflet and Echarts.</div>
            </div>
            <h3 className="text-lg font-semibold mt-2mb-2">
              Publication:
            </h3>
            <div className=" border-b border-t border-gray-800 py-5 ">
              <div className="text-sm mb-3 italic">
                Vancisin, T., Crawford, A., Orr, M. M., & Hinrichs, U. (2018). <a href="https://doi.org/10.6084/m9.figshare.6104699" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">From People
                  to Pixels: Visualizing Historical University Records.</a> In Transimage 2018:
                Proceedings of the 5th Biennial Transdisciplinary Imaging Conference 2018 (pp.
                41-57)
              </div>
            </div>
            {/* <p className="mb-8" id="visualization"></p>
            <figure className="mb-8">
              <a href="https://provenance.tomasvancisin.co.uk">
                <img className="rounded-md opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/scroll.PNG" />
                <figcaption className="text-sm text-center mt-2"> [1700 - 1897].</figcaption>
              </a>
            </figure> */}
            {/* <iframe src="https://provenance.tomasvancisin.co.uk" className="w-full h-full" /> */}


            <h1 className="text-xl my-2 text-left">Lost Detectives<p className="text-xs">School of Modern Languages, University of St Andrews</p></h1>
            <div className="mb-8 text-sm">
              During my PhD research I worked as a research assistant for the Lost Detectives project
              at the School of Modern Languages in St Andrews. The aim of this Knowledge Exchange and
              Impact project was to bring works of nineteenth-century Russian crime fiction to greater
              public prominence through adaptation.
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><a href="https://www.st-andrews.ac.uk/lostdetectives/"><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/detectives.png" /></a></div>
                <div className="text-xs mt-3">Illustration (Carol Adlam) for the Lost Detectives project and the official website developed by me.</div>
              </div>
            </div>

          </div>

          <div className="w-full md:w-3/4 order-2 md:order-4">
            <h1 className="text-xl my-2 text-left">About Me</h1>
            <div className="mb-8 text-sm">
              For more information about me and my work, here is my <a href="/cv.pdf" className="text-blue-500 hover:text-blue-800 visited:text-purple-600">CV</a>.
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
