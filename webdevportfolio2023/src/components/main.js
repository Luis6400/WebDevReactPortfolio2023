import { CheckIcon } from '@heroicons/react/20/solid'

const skillsfeatures = ["Java", "JavaScript", "Node.js", "React", "MySQL", "GraphQL", "MongoDB", "Express.js", "Tailwind CSS", "Bootstrap CSS", "Handlebars", "JQuery", "Inquirer", "RESTful APIs"]



export default function Home({handlePageChange}) {

    return (
        <div className="bg-white">


            <div className="relative isolate px-6 pt-2 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-70"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-24 ">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Check out my GitHub.{' '}
                            <a href="https://github.com/Luis6400" target={'_blank'} className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Click Here <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Luis Villarreal
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Hi, I'm Luis Villarreal – a dedicated web developer driven by a strong work ethic cultivated from my upbringing by immigrant parents in West Valley. Currently pursuing a Computer Science Associates Pre-Engineering degree, I've delved into Java software development and mastered the nuances of object-oriented programming. My skill set extends to a Full Stack Web Development bootcamp with the University of Utah, equipping me with expertise in Java, JavaScript, Node.js, React, MySQL, MongoDB, and more. Beyond my technical prowess, my journey includes roles in tech support and repair, granting me a unique perspective. Ready to contribute my diverse skills and unwavering determination to your projects.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                onClick={()=> handlePageChange('projects')}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                My Projects
                            </a>
                            <a href="#" onClick={()=>handlePageChange('about')} className="text-sm font-semibold leading-6 text-gray-900">
                                Read more about me <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <div>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Skills</h4>
                                <div className="h-px flex-auto bg-gray-100" />
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                            >
                                {skillsfeatures.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
