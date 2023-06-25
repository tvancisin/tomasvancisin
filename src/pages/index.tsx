
export default function Home() {
  return (
    <div className="bg-gray-999 text-gray-300 font-sans quicksand">
      <div className="p-6 sm:p-10 md:p-16 flex flex-wrap">

        <div className="w-full md:w-1/4 md:pr-10 order-3 md:order-1">
          <div className="max-w-md md:float-right md:text-right leading-loose tracking-tight md:sticky md:top-0 ">
            <p className="text-3xl my-4 md:my-5">Tomas Vancisin</p>
            <p className="text-sm my-4 md:my-5">Postgraduate Research Assistant<br />School of History <br />University of St Andrews </p>
            <p className="text-sm my-4 md:my-5">PhD researcher <br /> School of Computer Science <br /> University of St Andrews<br />
              <a href="https://sachi.cs.st-andrews.ac.uk/" className="text-blue-990 hover:text-blue-800 visited:text-purple-600">St Andrews HCI Research Group (SACHI)</a>
            </p>

            {/* <p className="text-xl my-4 md:my-5">Keywords</p> */}
            <p className="md:my-4 text-sm">Digital Humanities<br />Information Visualization <br /> Digital Heritage <br /> </p>
            <img className="w-3/5 inline-block" src="/uni_logo.png" />

            {/* <ul className="flex flex-wrap justify-between flex-col">
              <li><a href="#visualization" className="nav">Visualization</a></li>
              <li><a href="#" className="nav">Publications</a></li>
              <li><a href="#" className="nav">CV</a></li>
              <li><a href="#" className="nav">Contact</a></li>
            </ul> */}
          </div>
        </div>

        <div className="w-full md:w-3/4 order-1 md:order-2">
          <div className="max-w-[50vw] leading-loose tracking-tight">
            <h1 className="text-2xl my-5 text-center">RESEARCH</h1>

            {/* <p className="mb-8 text-base">
              My name is Tom and I work with 
              Digital Humanities, Information Visualication, and
              Digital Heritage.
            </p> */}


            <h1 className="text-xl my-2 text-left">Legacies of the Empire <p className="text-xs">School of History, University of St Andrews</p></h1>
            <div className="mb-8 text-sm"> Currently working as
              a postgraduate research assistant for the Legacies of the Empire Project,
              exploring how the University of St Andrews has benefited from UK's colonial past.
              Using visualization to map careers and occupations of St Andrews University alumni in British colonies.
              <div className="grid grid-cols-1 justify-items-center">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/legacies.png" /></div>
                <div className="text-xs mt-2">St Andrews students travelling to
                  and from British colonies [1700 - 1897].</div>
              </div>
            </div>

            <h1 className="text-xl my-2 text-left">PhD Research<p className="text-xs">School of Computer Science, University of St Andrews</p></h1>
            <div className="mb-8 text-sm">
              Developed a large variety of visualizations to explore the Biographical Register
              of the University of St Andrews; a collection of 25,525 student and staff records
              spanning the period between 1579 and 1897.
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/vanc.JPG" /></div>
                <div className="text-xs mt-2">Using Tableau to visualize students' birth locations and college affiliation [1747 - 1897].</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/graduates.JPG" /></div>
                <div className="text-xs mt-2">Using D3, Leaflet and Marker-Clustering to visualize graduates of the University [1747 - 1897].</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/split.JPG" /></div>
                <div className="text-xs mt-2">Emphasizing differences between current political map and a map from the period when
                  the British empire was at its greatest.</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/geojson.jpg" /></div>
                <div className="text-xs mt-2">Using GeoJSON and D3 to map the development of academic networks.</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/round_bundle.JPG" /></div>
                <div className="text-xs mt-2">Exploring career locations network through edge-bundling in D3.</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/map_network.JPG" /></div>
                <div className="text-xs mt-2">Exploring student paths to other universities in the UK and Europe using Leaflet and Echarts.</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/bars.JPG" /></div>
                <div className="text-xs mt-2">Visualizing the transformations of the University records since 1888 to 2022</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/scroll.PNG" /></div>
                <div className="text-xs mt-2">Visualizing the transformations of the University records since 1888 to 2022</div>
              </div>
              {/* <p className="mb-8" id="visualization"></p>
            <figure className="mb-8">
              <a href="https://provenance.tomasvancisin.co.uk">
                <img className="rounded-md opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/scroll.PNG" />
                <figcaption className="text-sm text-center mt-2"> [1700 - 1897].</figcaption>
              </a>
            </figure> */}
              {/* <iframe src="https://provenance.tomasvancisin.co.uk" className="w-full h-full" /> */}

            </div>

            <h1 className="text-xl my-2 text-left">Lost Detectives<p className="text-xs">School of Modern Languages, University of St Andrews</p></h1>
            <div className="mb-8 text-sm">
              Worked as a research assistant for the Knowledge Exchange and Impact project which aims to bring works of
              nineteenth-century Russian crime fiction to greater public prominence through adaptation.
              <div className="grid grid-cols-1 justify-items-center mb-8">
                <div><img className="rounded-md md:mt-5 opacity-80 hover:scale-105 hover:opacity-100 transition-all" src="/detectives.png" /></div>
                <div className="text-xs mt-2">Illustration (Carol Adlam) and the landing page for the Lost Detectives projects developed by me.</div>
              </div>
            </div>

          </div>

          <div className="w-full md:w-1/2 order-2 md:order-4">
            <div className="max-w-md leading-loose tracking-tight">
              <p className="font-bold my-4 md:my-12">About Me</p>
              <p className="mb-8">Arcu risus quis varius quam quisque id diam vel. Consectetur adipiscing elit ut aliquam purus sit amet. Nibh tortor id aliquet lectus proin nibh. </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
