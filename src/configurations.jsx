import { Fragment, useState } from "react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import Dall from "./assets/images/dall.png";
const viewType = [
  { id: 0, name: "View Type" },
  { id: 1, name: "Paranomic View" },
  { id: 2, name: "Wide Angle" },
];

const roomType = [
  { id: 0, name: "Room Type" },
  { id: 1, name: "Luxury House" },
  { id: 2, name: "Office Room" },
];

// const roomStyle = [
// 	{ id: 0, name: "Room Styles" },
// 	{ id: 1, name: "Luxury House" },
// 	{ id: 2, name: "Light Bloom" },
// 	{ id: 3, name: "Atmospheric" },
// 	{ id: 4, name: "Cozy" },
// 	{ id: 5, name: "Plants" },
// 	{ id: 6, name: "minimalist contemporary modern design living room" },
// 	{ id: 7, name: "fabric and textiles" },
// 	{ id: 8, name: "Office room" },
// 	{ id: 9, name: "LED lights" },
// 	{ id: 10, name: "Seats" },
// 	{ id: 11, name: "coffee table" },
// 	{ id: 12, name: "Carpet" },
// 	{ id: 13, name: "Dinner table" },
// 	{ id: 14, name: "wide windows" },
// ];
const roomStyle = [
  { id: 0, name: "Room Styles" },
  { id: 1, name: "Luxury House", types: [{ id: 0, name: "Light Bloom" }] },
  { id: 2, name: "Office Room", types: [{ id: 0, name: "Led Lights" }] },
];
/*
View Type
Panoramic view
Wide angle

Room Type
Luxury house
Office room

Room Styles
Luxury house
light bloom
Atmospheric
Cozy
Plants
minimalist contemporary modern design living room
fabric and textiles
Office room
LED lights
Seats
coffee table
Carpet
Dinner table
wide windows
*/

export default function SettingsPrompt({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-center items-center mb-4 ">
                      <div className="text-center w-full">
                        <img
                          className="m-20"
                          style={{ height: "30px" }}
                          src={Dall}
                          alt="dall"
                        />
                        <div>Dall-E-360</div>
                      </div>
                      <div
                        role="button"
                        tabIndex="1"
                        className="w-fit"
                        onClick={closeModal}
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2 flex-col md:flex-row">
                        <div className="w-full">
                          <Demo arrayOfObjects={viewType} type="viewtype" />
                        </div>
                        <div className="w-full">
                          <Demo arrayOfObjects={roomType} type="roomType" />
                        </div>
                      </div>
                      <div className="w-full">
                        <Demo arrayOfObjects={roomStyle} type="roomStyle" />
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 w-full"
                      onClick={closeModal}
                    >
                      Okay!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
function Demo({ arrayOfObjects, type }) {
  console.log(type);
  const [selected, setSelected] = useState(arrayOfObjects[0]);
  function isSelected(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      {type === "roomStyle" ? (
        <div>
          <Listbox value={selected} onChange={setSelected}>
            <Listbox.Button className="border rounded-lg p-2 w-full">
              <div className="flex justify-between px-3">
                {selected.name}
                <ChevronUpDownIcon className="w-6 h-6" />
              </div>
            </Listbox.Button>
			<Transition
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="mt-3">
                <Listbox.Options className="space-y-1">
                  {arrayOfObjects.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        `relative cursor-default select-none rounded-lg  ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                      value={option}
                    >
                      <div
                        className={`${
                          isSelected(option.name, selected.name)
                            ? "bg-blue-100 text-blue-900"
                            : ""
                        } w-full rounded p-2.5 flex items-center justify-between`}
                      >
                        <div>{option.name}</div>
                        {isSelected(option.name, selected.name) && (
                          <div>
                            <CheckIcon className="w-6 h-6" />
                          </div>
                        )}
                      </div>
					  
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Transition>
          </Listbox>
        </div>
      ) : (
        <div>
          <Listbox value={selected} onChange={setSelected}>
            <Listbox.Button className="border rounded-lg p-2 w-full">
              <div className="flex justify-between px-3">
                {selected.name}
                <ChevronUpDownIcon className="w-6 h-6" />
              </div>
            </Listbox.Button>
            <Transition
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="mt-3">
                <Listbox.Options className="space-y-1">
                  {arrayOfObjects.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        `relative cursor-default select-none rounded-lg  ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                      value={option}
                    >
                      <div
                        className={`${
                          isSelected(option.name, selected.name)
                            ? "bg-blue-100 text-blue-900"
                            : ""
                        } w-full rounded p-2.5 flex items-center justify-between`}
                      >
                        <div>{option.name}</div>
                        {isSelected(option.name, selected.name) && (
                          <div>
                            <CheckIcon className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Transition>
          </Listbox>
        </div>
      )}
    </div>
  );
}
