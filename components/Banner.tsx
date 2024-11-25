"use client";
import local from "next/font/local";
import Image from "next/image";

const handleShare = () => {
    const tweet = encodeURIComponent(`local food spots to your weekend date plans.\n\neverything you need to know about namma bengaluru. \n \ncheck out: https://blr-wiki-vercel.app`);
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(twitterIntentUrl, '_blank');
}

const degular = local({
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

export default function Banner() {
    return (
        <div className="relative h-[400px] w-full">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/banner.webp)',
                    backgroundPosition: 'center 40%'
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 max-w-3xl mx-auto">
                <div className={`flex flex-col ${degular.className} my-12`}>
                    <div className="flex items-center">
                        <Image alt="map pin" src="/map_pin.svg" height="25" width="25" />
                        <p className="text-xl">your are at</p>
                    </div>
                    <p className="text-[96px] leading-none mt-[-13px]">bengaluru</p>
                    <p className="self-end mr-2">blr.wiki</p>
                </div>

                <button className="mt-8 bg-black text-white px-8 py-2.5 rounded-full text-sm hover:bg-gray-900 transition-colors" onClick={handleShare}>
                    Share on X
                </button>
            </div>
        </div>
    )
} 