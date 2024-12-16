import Image from "next/image";

export default function HotProduct() {
  return (
    <>
    <header className="container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
     {/* vertical text */}
        <div
          className="hidden text-3xl font-medium tracking-widest text-zinc-900 md:block pt-6"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "sideways",
            transform: "rotate(180deg)",
          }}
        >
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Mobile text version */}
        <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Image */}
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/image 123.jpeg"
                alt="Orange modern chair"
                className="object-cover"
                layout="fill"
                priority
              />
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Small Square Images */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/naina.png"
                  alt="White tufted chair"
                  className="object-cover"
                  layout="fill"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/Products (2).png"
                  alt="Gray upholstered chair"
                  className="object-cover"
                  layout="fill"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/card (1).png"
                  alt="Vintage white chair"
                  className="object-cover"
                  layout="fill"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/Products (2).png"
                  alt="Vintage white chair duplicate"
                  className="object-cover"
                  layout="fill"
                />
              </div>
            </div>
          </div>
      </div>
    </header>
    </>
  );
}
