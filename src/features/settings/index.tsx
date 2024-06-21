"use client";

import SubTitle from "../ui/SubTItle";
import Title from "../ui/Title";
import useModalAlertStore from "../globalState/zustand/modalAlert";

export default function SettingsPage() {
  // const { openModalAlert } = useModalAlertStore();

  return (
    <div className="relative m-auto w-fit">
      <Title title="Settings" />
      <SubTitle
        subtitle={`You can make camera settings.
For any other inquiries, please 'Contact Us' through the ‘Contact Us’ button below.`}
      />

      <section className="grid grid-cols-3 gap-3 mt-5">
        <h4 className="flex items-center justify-center text-zinc-600">
          CAM1 :
          <input
            className="block p-2 ml-2 border rounded-md"
            placeholder="CAM1"
          />
        </h4>
        <h4 className="flex items-center justify-center text-zinc-600">
          CAM2 :
          <input
            className="block p-2 ml-2 border rounded-md"
            placeholder="CAM2"
          />
        </h4>
        <h4 className="flex items-center justify-center text-zinc-600">
          CAM3 :
          <input
            className="block p-2 ml-2 border rounded-md"
            placeholder="CAM3"
          />
        </h4>
        <h4 className="flex items-center justify-center text-zinc-600">
          CAM4 :
          <input
            className="block p-2 ml-2 border rounded-md"
            placeholder="CAM4"
          />
        </h4>
        <h4 className="flex items-center justify-center text-zinc-600">
          CAM5 :
          <input
            className="block p-2 ml-2 border rounded-md"
            placeholder="CAM5"
          />
        </h4>
        <h4 className="flex items-center justify-center text-zinc-600">
          CAM6 :
          <input
            className="block p-2 ml-2 border rounded-md"
            placeholder="CAM6"
          />
        </h4>
      </section>
      <section className="flex justify-end gap-3 mt-5">
        <button className="px-3 py-2 text-white rounded bg-gradient-to-r from-green-500 to-teal-500 min-w-24">
          Contact Us
        </button>
        <button className="px-3 py-2 text-white rounded bg-gradient-to-r from-green-500 to-teal-500 ">
          Save
        </button>
      </section>
    </div>
  );
}
