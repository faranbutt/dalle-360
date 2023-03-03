import NavBrand from "./assets/images/transparent.png";
import discord from "./assets/images/discord.png";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown, Cog } from "heroicons-react";
import InputPrompt from "./prompt";
import { useState } from "react";
import SettingsPrompt from "./configurations";

export default function NavBar() {
	let [isOpen, setIsOpen] = useState(false);
	let [showSettings, setShowSettings] = useState(false);

	function handleSubmit(value) {
		console.log(`User entered: ${value}`);
		setIsOpen(false);
	}

	return (
		// Making 2 navbar
		<header className="fixed w-full z-50">
			<nav className="hidden md:block bg-black text-white fixed h-screen p-3">
				<div className="flex flex-col h-full gap-36 overflow-auto">
					<div className="flex items-center justify-center gap-2">
						<div>
							<img className="w-16 h-16" src={NavBrand} alt="" />
						</div>
						<div className="font-bold text-xl mr-2">
							DALL-E - 360
						</div>
					</div>
					<div className="h-fulls flex items-center mb-20">
						<div className="flex flex-col gap-3 ">
							<a
								href="#"
								className="flex  items-center gap-2 hover:translate-x-2 duration-300"
							>
								<div className="h-1.5 w-1.5 bg-rose-600 rounded-full"></div>
								Home
							</a>
							<a
								href="#"
								className="flex  items-center gap-2 hover:translate-x-2 duration-300"
							>
								<div className="h-1.5 w-1.5 bg-white rounded-full"></div>
								Early Access
							</a>
							<a
								href="#"
								className="flex  items-center gap-2 hover:translate-x-2 duration-300"
							>
								<div className="h-1.5 w-1.5 bg-white rounded-full"></div>
								Gallery
							</a>
							<button
								onClick={() => setIsOpen(true)}
								className="flex  items-center gap-2 hover:translate-x-2 duration-300"
							>
								<div
									className={`h-1.5 w-1.5 ${
										isOpen ? "bg-rose-600" : "bg-white"
									} rounded-full`}
								></div>
								Prompt
								<InputPrompt
									isOpen={isOpen}
									setIsOpen={setIsOpen}
									onSubmit={handleSubmit}
								/>
							</button>
							<button
								onClick={() => setShowSettings(true)}
								className="flex items-center gap-1 hover:translate-x-2 duration-300"
							>
								<Cog
									className={`${
										showSettings
											? "text-rose-600"
											: "text-inherit"
									}`}
								/>
								Settings
								<SettingsPrompt
									isOpen={showSettings}
									setIsOpen={setShowSettings}
								/>
							</button>
						</div>
					</div>
					<a
						href="#"
						className="flex items-center gap-1 px-3 p-3 text-gray-200 fixed bottom-0"
					>
						<img className="w-10" src={discord} alt="" />
						<div className="bg-gray-300 w-1 h-1 rounded-full"></div>
						<div>Discord</div>
					</a>
				</div>
			</nav>
			<MobileNav
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				handleSubmit={handleSubmit}
			/>
		</header>
	);
}

function MobileNav({ setIsOpen, isOpen, handleSubmit }) {
	return (
		<nav className="text-white bg-black w-full p-3 md:hidden">
			<div>
				<Disclosure>
					{({ open }) => (
						<>
							<div className="flex justify-between">
								<div className="flex items-center gap-2 font-bold text-lg">
									<div>
										<img
											className="w-12 h-12"
											src={NavBrand}
											alt=""
										/>
									</div>
									<div>Dall-E - 360</div>
								</div>
								<Disclosure.Button>
									<div
										className={`${
											open ? "rotate-180" : "rotate-0"
										}
                                            transition-all duration-500 rounded-full border-2 p-0.5 flex items-center justify-center border-t-red-400`}
									>
										<ChevronDown />
									</div>
								</Disclosure.Button>
							</div>
							<Transition
								show={open}
								enter="transition duration-300 ease-out"
								enterFrom="transform translate-y-full opacity-0"
								enterTo="transform translate-y-0 opacity-100"
								leave="transition duration-300 ease-out"
								leaveFrom="transform translate-y-full opacity-100"
								leaveTo="transform scale-50 opacity-0"
							>
								<Disclosure.Panel className="mt-2 p-2 font-medium space-y-2">
									<a
										href="#"
										className="flex  items-center gap-2 hover:translate-x-2 duration-300"
									>
										<div className="h-1.5 w-1.5 bg-rose-600 rounded-full"></div>
										Home
									</a>
									<a
										href="#"
										className="flex  items-center gap-2 hover:translate-x-2 duration-300"
									>
										<div className="h-1.5 w-1.5 bg-white rounded-full"></div>
										Early Access
									</a>
									<a
										href="#"
										className="flex  items-center gap-2 hover:translate-x-2 duration-300"
									>
										<div className="h-1.5 w-1.5 bg-white rounded-full"></div>
										Gallery
									</a>
									<button
										onClick={() => setIsOpen(true)}
										className="flex  items-center gap-2 hover:translate-x-2 duration-300"
									>
										<div
											className={`h-1.5 w-1.5 ${
												isOpen
													? "bg-rose-600"
													: "bg-white"
											} rounded-full`}
										></div>
										Prompt
										<InputPrompt
											isOpen={isOpen}
											setIsOpen={setIsOpen}
											onSubmit={handleSubmit}
										/>
									</button>
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
			</div>
		</nav>
	);
}
