import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { classNames } from "./classNames";

export default function InputPrompt({ isOpen, setIsOpen, onSubmit }) {
	const [value, setValue] = useState("");

	function closeModal() {
		setIsOpen(false);
	}

	function handleSubmit(event) {
		event.preventDefault();
		onSubmit(value);
	}

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel
									className={classNames(
										"w-full max-w-md rounded-2xl bg-white p-6",
										"transform overflow-hidden align-middle shadow-xl transition-all"
									)}
								>
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900 text-center"
									>
										~ Enter Prompt ~
									</Dialog.Title>
									<form className="">
										<div className="mt-4">
											<input
												className={classNames(
													"border rounded-md",
													"p-1.5 px-2 w-full",
													"transition-all duration-300",
													"focus:outline-none focus:input_shadow"
												)}
												type="text"
												value={value}
												onChange={(event) =>
													setValue(event.target.value)
												}
											/>
										</div>

										<div className="mt-4 flex flex-col-reverse gap-2 md:flex-row">
											<button
												type="button"
												className={classNames(
													"bg-red-100 px-4 py-2 text-sm font-medium text-red-900 w-full",
													"inline-flex justify-center",
													"rounded-md border border-transparent",
													"hover:bg-red-200 focus:outline-none",
													"focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
												)}
												onClick={closeModal}
											>
												Cancel
											</button>
											<button
												type="submit"
												// className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 w-full hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
												className={classNames(
													"bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 w-full",
													"inline-flex justify-center",
													"rounded-md border border-transparent",
													"hover:bg-blue-200 focus:outline-none",
													"focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
												)}
												onClick={handleSubmit}
											>
												Send!
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
