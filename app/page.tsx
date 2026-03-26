export default function Home() {
  return (
    <div className="min-h-screen max-w-[90vw] mx-auto py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-3 p-6 px-8 max-w-6xl mx-auto">
        {/* Hero: spans on mobile/tablet, full col on desktop */}
        <div className="sm:col-span-2 lg:col-span-2 lg:row-span-3 bg-neutral-900 rounded-2xl min-h-[35vh] p-8 flex flex-col justify-center gap-1">
          <div className="font-oswald text-white text-6xl font-bold tracking-tight">sarvagya.dev</div>
          <div className="font-oswald text-neutral-400 font-light tracking-wide">SARVA DEV / SARV AGYA.DEV / SARVA</div>
          <div className="font-oswald text-neutral-500 text-xs tracking-widest">SARVA DEV / S ARYA DEV / S ARYA</div>
        </div>

        {/* Tools */}
        <div className="sm:col-span-1 lg:col-span-2 bg-neutral-900 rounded-2xl min-h-[20vh]" />

        {/* Papers & Academia */}
        <div className="sm:col-span-1 lg:col-span-2 bg-neutral-900 rounded-2xl min-h-[20vh]" />

        {/* Letters */}
        <div className="bg-neutral-900 rounded-2xl min-h-[20vh]" />

        {/* Extras */}
        <div className="bg-neutral-900 rounded-2xl min-h-[20vh]" />

        {/* Bottom bar */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-neutral-900 rounded-2xl min-h-[10vh]" />
      </div>
    </div>
  );
}
