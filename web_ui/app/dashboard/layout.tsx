export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="sticky top-0 flex w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Logo Bar
      </div>
      <div className="w-full flex md:w-64">
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
          side bar side bar side bar side bar side bar side bar side bar side
          bar side bar side bar side bar side bar side bar side bar side bar
          side bar side bar side bar side bar side bar side bar side bar side
          bar side barside bar side bar side bar side bar side bar side bar side bar side
          bar side bar side bar side bar side bar side bar side bar side bar
          side bar side bar side bar side bar side bar side bar side bar side
          bar side barside bar side bar side bar side bar side bar side bar side bar side
          bar side bar side bar side bar side bar side bar side bar side bar
          side bar side bar side bar side bar side bar side bar side bar side
          bar side bar
        </div>
        <div className="flex-auto p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
