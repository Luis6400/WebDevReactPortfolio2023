import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import lv from "../assets/lv.png"
import louis from "../assets/louis.png"
import Home from './main'

const navigation = [
    { name: 'GitHub', href: 'https://github.com/Luis6400', target: "_blank" },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luisvillarreal21/', target: "_blank" },
    { name: 'Projects', page: 'projects', href: '#'},
    { name: 'About Me', page: 'about', href: '#'},
]

export default function Nav({currentpage, handlePageChange}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const homepage = "home"
    const nonselected = "text-sm font-semibold leading-6 text-gray-900 hover:text-white"
    const selected = "text-sm font-semibold leading-6 text-white hover:text-indigo-600"

    return (
        <header className="sticky bg-gradient-to-b from-indigo-600 via-indigo-300 to-transparent inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href='#' onClick={()=>handlePageChange(homepage)}  className="-m-1.5 p-1.5">
                        <span className="sr-only">Luis Villarreal</span>
                        <img
                            className="h-12 w-12 object-cover rounded-full"
                            src={louis}
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} onClick={()=>handlePageChange(item.page||currentpage)} target={item.target} className={currentpage === item.page?selected:nonselected}>
                            {item.name}
                        </a>
                    ))}
                </div>

            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div onClick={()=>handlePageChange(homepage)} className="-m-1.5 p-1.5">
                            <span className="sr-only">Luis Villarreal</span>
                            <img
                                className="h-8 w-auto"
                                src={lv}
                                alt=""
                            />
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target={item.target}
                                        onClick={()=>{
                                            handlePageChange(item.page)
                                            setMobileMenuOpen(false)
                                        }}
                                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>)
}