import SideBar from "../ui/dashboard/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="flex w-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Logo Bar
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="w-64 h-full">
            <SideBar></SideBar>
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
