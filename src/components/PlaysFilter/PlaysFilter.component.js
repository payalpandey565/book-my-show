import { Disclosure } from '@headlessui/react';
import{BiChevronDown,BiChevronUp} from "react-icons/bi";

const PlaysFilter= (props) => {
  return (
    <Disclosure>
    {({ open }) =>(
      <>
      <div className="py-2 ">
      <Disclosure.Button className="py-2 flex items-center bg-white rounded-md h-12 w-2/3 ">
      {open ? <BiChevronUp/> : <BiChevronDown/>}
      <span className={open ? "text-navCol-80" :"text-gray-700"}>
        {props.title}
        </span>
      </Disclosure.Button>
      </div>
      <Disclosure.Panel className="text-gray-500 bg-white rounded-md h-20 w-2/3 ">
      <div className="flex item-center gap-3 flex-wrap">
      {props.tags.map((tag) => (
      <>
    <div className="border-2 border-gray-200 p-1">
    <span className="text-navCol-80">{tag}</span>
    </div>
    </>
    ))
   }
     </div>

      </Disclosure.Panel>
      </>

    ) }

    </Disclosure>
  );
};
export default PlaysFilter;
