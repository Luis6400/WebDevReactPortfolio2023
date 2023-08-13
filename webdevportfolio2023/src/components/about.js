import { PlusCircleIcon, BookOpenIcon, CommandLineIcon } from '@heroicons/react/20/solid'
import head from "../assets/headshot.jpeg"

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Who am I</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Luis Villarreal</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Crafting Digital Magic with Code and Tenacity              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[32rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={head}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Hello there! I'm Luis Villarreal, a dedicated and hardworking web developer with a passion for creating innovative digital solutions. Hailing from West Valley and raised by two hardworking immigrants, I've inherited a strong work ethic and a determination to excel in all I do. Currently, I'm on an exciting journey towards completing a Computer Science Associates Pre-Engineering degree, with four years already under my belt and a mere two left to conquer. My academic pursuits have honed my skills in Java software development and granted me a profound understanding of the intricacies of object-oriented programming.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BookOpenIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">My Schooling -</strong> Embarking on a journey at Salt Lake Community College towards a Computer Science Associates Pre-Engineering degree, complemented by immersive learning, and fueled by a Full Stack Web Development bootcamp from the University of Utah.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CommandLineIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">My Arsenal -</strong> Proficient in an array of tools including Java, JavaScript, Node.js, React, MySQL, MongoDB, Express.js, and more – all poised to craft seamless digital solutions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PlusCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Ventures Beyond -</strong> From tackling tech support challenges and appliance repairs to navigating the intricacies of phone and computer repair, my journey is a testament to adaptability and problem-solving. Ready to channel these diverse experiences into innovative web solutions
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Beyond my academic pursuits, I embarked on an invigorating journey with the University of Utah's Full Stack Web Development bootcamp. Within this intensive program, I honed my skills in the MERN stack, engaging in multiple projects that brought the realms of databasing, server-side logic, and frontend finesse to life. Navigating the intricacies of the MERN stack, I mastered the art of crafting dynamic user interfaces with React, seamlessly integrating them with Node.js and Express.js on the server side. Moreover, my journey unveiled the nuances of efficient data management, as I navigated through MySQL and MongoDB databases. This bootcamp voyage has fortified my abilities to engineer comprehensive and captivating digital solutions.              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Forging Digital Pathways</h2>
              <p className="mt-6">
              My journey is a fusion of roles in diverse tech landscapes, from internet service provider tech support to adeptly handling phone and computer repairs. These encounters have honed my adaptability and creative problem-solving, infusing a unique perspective into my web development endeavors. Armed with an evolving skill set, a Computer Science Associates Pre-Engineering degree in progress at Salt Lake Community College, and the immersive Full Stack Web Development bootcamp from the University of Utah, I'm poised to embark on the next chapter of my career as a dedicated web developer. Let's collaborate to breathe life into visionary digital solutions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
