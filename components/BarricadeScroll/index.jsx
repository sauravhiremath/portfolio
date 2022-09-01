import Marquee from "react-fast-marquee";

const index = () => {
  return (
    <div className="rotate-6 absolute left-0 right-0 -m-8">
      <div className="w-full flex items-center">
        <Marquee speed={30} gradient={true}>
          <div className="w-full stripe-pattern p-3" />
        </Marquee>
      </div>
      <div className="w-full flex items-center">
        <Marquee speed={70} gradient={false} className="p-4">
          <div className="flex-shrink font-extrabold text-4xl uppercase text-slate-400">
            I develop things that help humanity. Well atleast someday, until
            then here we are... &nbsp;
          </div>
        </Marquee>
      </div>
      <div className="w-full flex items-center">
        <Marquee speed={30} direction="right" gradient={true}>
          <div className="w-full stripe-pattern p-3" />
        </Marquee>
      </div>
    </div>
  );
};

export default index;
