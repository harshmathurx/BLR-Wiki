import localFont from "next/font/local";
import styles from "./Header.module.css";

const degular = localFont({
  src: [
    {
      path: "./Degular_Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Degular_Text_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`flex flex-col ${degular.className} my-12`}>
        <div className="flex items-center">
          <img src="/map_pin.svg" height="25" width="25" />
          <p className="text-xl">your are at</p>
        </div>
        <p className="text-[96px] leading-none mt-[-13px]">bengaluru</p>
        <p className="self-end mr-2">blr.wiki</p>
      </div>
      {/* <div className={styles.maindiv} style={{backgroundImage:"url('blr.jpg')", backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: "center bottom", height: "600px" }}>
      
      </div> */}
      <div className="py-4 px-2 mx-auto sm:py-4 lg:px-6 w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="/img_3.jpeg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              {/* <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl">
                Wines
              </h3> */}
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
              <img
                src="/img_1.jpeg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              {/* <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl">
                Gin
              </h3> */}
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="/img_2.jpeg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                {/* <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Whiskey
                </h3> */}
              </a>
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="/img_4.jpeg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                {/* <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Vodka
                </h3> */}
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="/img_5.jpeg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              {/* <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl">
                Brandy
              </h3> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
