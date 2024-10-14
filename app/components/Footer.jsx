import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="p-3 md:p-6 lg:p-10 flex flex-col">
        <p className="max-w-[1920px] min-w-full pb-8 font-mono text-[13px] uppercase">
          [003. Let's stay in touch]
        </p>
        <div className="mx-auto w-full max-w-[1920px] flex flex-col rounded-2xl bg-[--color-pink] px-3 pb-5 pt-4 text-black md:px-8 md:pb-8 md:pt-11">
          <p className="flex w-[80%] flex-1 text-[32px] font-medium leading-[0.95] md:w-[66%] md:text-[56px] lg:min-w-[780px]">
            Full stack web developer based in Montréal.
          </p>
          <div className="gap-y-6 border-b border-solid border-black py-4 md:flex md:flex-row md:items-end md:justify-between md:gap-y-4 md:py-10">
            <p className="text-xl font-normal leading-[1.2] md:w-2/5 md:text-[32px] md:leading-none lg:max-w-[780px]">
              I learn and improve every day to take on new challenges.
            </p>
            <div className="flex flex-row items-center justify-stretch gap-x-2 py-4 md:w-3/5 md:justify-end md:py-0 md:pl-6 lg:w-auto">
              <button className="group relative inline-flex h-[44px] w-1/2 items-center justify-center rounded-lg bg-black px-2 font-mono text-[15px] font-medium uppercase text-white transition-all duration-200 sm:px-6 md:hover:bg-white md:hover:text-black lg:w-auto">
                Github
              </button>
              <a
                href="#"
                className="relative inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 border border-solid border-black bg-transparent text-black backdrop-blur-[10px] md:hover:bg-black md:hover:text-white text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30 w-1/2 lg:w-auto"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="flex w-full flex-row items-end pt-6">
            <div className="w-1/2 md:w-2/5 lg:w-3/12">
              <Image
                src="/logos/jl-2.svg"
                alt="Logo"
                width={85}
                height={32}
                className="ui-flex-none ui-fill-black fill-current md:min-w-[180px] lg:min-w-[210px]"
              />
            </div>
            <div className="flex w-1/2 flex-col justify-between md:pl-6 lg:w-9/12 lg:flex-row-reverse lg:items-center lg:pl-0">
              <ul className="text-[15px] font-normal leading-[1.1] lg:flex lg:w-full lg:max-w-[440px] lg:justify-between">
                <li className="whitespace-nowrap py-2">
                  <a href="#" className="lg:hover:underline">
                    Linkedin
                  </a>
                </li>
                <li className="whitespace-nowrap py-2">
                  <a href="#" className="lg:hover:underline">
                    Github
                  </a>
                </li>
                <li className="whitespace-nowrap py-2">
                  <a href="#" className="lg:hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
              <p className="flex h-[85px] items-end md:h-auto md:pt-10 lg:px-10 lg:pt-0 xl:px-0">
                <small className="xs:text-[13px] text-[11px] font-normal leading-[1.1] sm:text-[15px] md:text-base md:leading-[1.1] lg:whitespace-nowrap">
                  ©2024 Julien Le Mee, All right reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
