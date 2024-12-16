import Image from "next/image"; 
const Logo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src="/Logo.png" alt="Zaphier Logo" 
        width={100} height={100}></Image>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (1).png"
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        ></Image>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (2).png"
          alt="Cib Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (3).png"
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (4).png"
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (6).png"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/Logo (5).png" alt="Moz Logo" width={84} height={87} />
      </div>
    </div>
  );
};

export default Logo;