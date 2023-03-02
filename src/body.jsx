export default function Body() {
    return (
        <main className="p-3e px-4e w-full md:ml-52">
            {/* <h2 className="bg-blue-300">UI Test</h2> */}
            <div className="absolute font-bold text-2xl bg-black w-full h-full flex items-center justify-center">
                <div className="relative z-50 bg-blacke rounded-md p-3 bg-opacity-5 backdrop-bluer-sm text-white">
                    Generate 3d views with Dalle-E 360
                </div>
            </div>
            <iframe className="h-screen w-full mt-[4.5rem] md:m-0 relative" allowFullScreen={true} allow="accelerometer; magnetometer; gyroscope" src="https://panoraven.com/en/embed/PYKxs5WSfX"></iframe>
        </main>
    )
}