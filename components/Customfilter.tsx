"use client";
import { customfilterprops } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { useState, Fragment } from "react";
import { link } from "fs";
import { useRouter } from "next/navigation";
import { updatesearchparams } from "@/utils";

// const [selected, setselected] = useState('');
const Customfilter = ({ title, options }: customfilterprops) => {
  const router = useRouter();
  const [selected, setselected] = useState(options[0]);
  const handleupdateparams = (e: { title: string, value: string }) => {
    const newpathname = updatesearchparams(title, e.value.toLowerCase());

    router.push(newpathname,{scroll:false});
  };
  return (
    <div className="w-fit ">
      <Listbox
        value={selected}
        onChange={(e) => {
          setselected(e);

          handleupdateparams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="image"
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4  ${
                      active ? `bg-primary-blue text-white` : `text-gray-900`
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? `font-medium` : `font-normal`
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Customfilter;
