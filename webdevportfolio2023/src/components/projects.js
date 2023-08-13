import { CheckIcon } from '@heroicons/react/20/solid'
import brrdi from "../assets/brrdi.png"
import sleep from "../assets/sleep.png"
import coffee from "../assets/coffee.png"
import git from "../assets/git.png"

const brrdiFeatures = ["MERN stack", "Tailwind CSS", "MongoDB", "Express.js", "React", "Node.js"]
const sleepshopfeatures = ["MySQL", "Express.js", "Handlebars", "Pico CSS"]
const coffeeFeatures = ["HTML", "CSS", "JavaScript", "jQuery", "Bulma CSS", "RESTful APIs"]



export default function Projects() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Exploring My Creations</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        From Concept to Click: Journey through My Web Development Ventures
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Brrdi</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Introducing Brrdi: A dynamic social media platform crafted using the MERN stack and Tailwind CSS. Dive into a world of 'Chrrp's – where your thoughts take flight as text-based posts. Explore the ever-changing feed of these concise, impactful messages, and curate your digital presence through your personalized profile page. Brrdi empowers you to connect, share, and experience the essence of community in a whole new way.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Technologies Used</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {brrdiFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl h-full bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className=" px-8">

                                <img src={brrdi} alt='brrdi' className='w-full object-cover rounded-2xl' />

                                <a
                                    href="https://brrdi-aeb82933537b.herokuapp.com/"
                                    target={'_blank'}
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Visit Deployment
                                </a>
                                <a href="https://github.com/Luis6400/Brrdi" target={'_blank'} className="font-semibold text-indigo-600">
                                    <span className="" aria-hidden="true" />
                                    GitHub Repo<span aria-hidden="true">&rarr;</span>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mt-16 border-indigo-600' />

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">SleepShop</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Welcome to SleepShop: An innovative dynamic platform designed to revolutionize your sleep journey. Seamlessly powered by a MySQL database, Express.js server, Handlebars framework, and Pico CSS, SleepShop empowers you to take charge of your restorative sleep habits. Record your nightly sleep effortlessly and earn coveted points as you align with CDC guidelines for optimal sleep duration. Redeem your hard-earned points in the SleepShop marketplace, where a collection of sleep-enhancing essentials – from cozy blankets to indulgent pillows – awaits you. Embark on a transformative path to better sleep and experience the remarkable synergy of technology and well-being.                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Technologies Used</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {sleepshopfeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl h-full bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className=" px-8">

                                <img src={sleep} alt='sleepshop demo image' className='w-full object-cover rounded-2xl' />

                                <a
                                    href="https://sleepshop.herokuapp.com/"
                                    target={'_blank'}
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Visit Deployment
                                </a>

                                <a href="https://github.com/Luis6400/SleepShop" target={'_blank'} className="font-semibold text-indigo-600">
                                    <span className="" aria-hidden="true" />
                                    GitHub Repo<span aria-hidden="true">&rarr;</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mt-16 border-indigo-600' />

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">CoffeWalk</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                        Introducing CoffeWalk: Embark on a seamless exploration of coffee culture with this early web development endeavor. Crafted using Bulma CSS, CoffeWalk ingeniously integrates Bing Maps REST API and OpenWeather REST API, culminating in a simple yet impactful experience. Input your location, and effortlessly unearth the nearest coffee havens. The magic unfolds as you select a coffee shop, receiving not just walking directions, but also a glimpse of the weather forecast – ensuring every step aligns with your coffee cravings and the elements. Immerse yourself in the essence of wanderlust and caffeine with CoffeWalk.                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Technologies Used</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {coffeeFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl h-full bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className=" px-8">

                                <img src={coffee} alt='coffeewalk demo image' className='w-full object-cover rounded-2xl' />

                                <a
                                    href="https://luis6400.github.io/CoffeeWalk/"
                                    target={'_blank'}
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Visit Deployment
                                </a>

                                <a href="https://github.com/Luis6400/CoffeeWalk" target={'_blank'} className="font-semibold text-indigo-600">
                                    <span className="" aria-hidden="true" />
                                    GitHub Repo<span aria-hidden="true">&rarr;</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mt-16 border-indigo-600' />

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Plenty More</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                        Embark on a journey through a treasure trove of my web development evolution. Within the realm of my GitHub repository, you'll discover a constellation of projects that reflect my growth and versatility. From crafting basic text editors and CLI apps for streamlined efficiency to building intricate e-commerce backends and dynamic weather dashboards, I've harnessed a myriad of technologies. Expect to encounter CSS, JavaScript, HTML, Node.js, Express, Handlebars, JQuery, Inquirer, Git, npm, and a multitude of RESTful APIs. These projects are a testament to my commitment to innovation and the ever-expanding horizon of possibilities in web development. Join me in exploring the multifaceted world of coding!                        </p>
                        
                        
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl h-full bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className=" px-8">

                                <img src={git} alt='an image of my github' className='w-full object-cover rounded-2xl' />

                                <a
                                    href="https://github.com/Luis6400"
                                    target={'_blank'}
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Visit My GitHub
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
