import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-blue-800">
      <div
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"

      >
        <div className="w-32 text-white md:w-40">{/* <AcmeLogo /> */}</div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
