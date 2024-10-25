import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="p-3 md:p-6 lg:p-10 flex flex-col">
        <p className="max-w-[1920px] min-w-full pb-8 font-mono text-[13px] uppercase dark:text-[--color-pink] text-[--color-dark-text]">
          [004. Thanks for your time]
        </p>
        <div className="mx-auto w-full max-w-[1920px] flex flex-col rounded-2xl bg-[--color-pink] px-3 pb-5 pt-4 text-black md:px-8 md:pb-8 md:pt-11">
          <p className="flex w-[80%] flex-1 text-[32px] font-medium leading-[0.95] md:w-[66%] md:text-[56px] lg:min-w-[780px]">
            Based in Montréal.
          </p>
          <div className="gap-y-6 border-b border-solid border-black py-4 md:flex md:flex-row md:items-end md:justify-between md:gap-y-4 md:py-8">
            <p className="text-xl font-normal leading-[1.2] md:w-2/5 md:text-[32px] md:leading-none lg:max-w-[780px]">
              Stay connected.
            </p>
            <div className="flex flex-row items-center justify-stretch gap-x-2 py-4 md:w-3/5 md:justify-end md:py-0 md:pl-6 lg:w-auto">
              <a
                href="https://github.com/julienLeMee"
                target="_blank"
                className="relative inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 border border-solid border-black bg-black text-white backdrop-blur-[10px] md:hover:bg-white md:hover:border-white md:hover:text-black text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30 w-1/2 lg:w-auto"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/julien-le-mee/"
                target="_blank"
                className="relative inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 border border-solid border-black bg-transparent text-black backdrop-blur-[10px] md:hover:bg-black md:hover:text-white text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30 w-1/2 lg:w-auto"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="flex w-full flex-row items-end pt-6">
            <div className="w-1/2 md:w-2/5 lg:w-3/12">
              <svg
                width="85px"
                height="85px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="194.75625 -2.799999999999997 110.4875 155.6"
                preserveAspectRatio="xMidYMid"
              >
                <defs>
                  <filter id="editing-extrude-glow">
                    <feFlood floodColor="#333333" result="flood-1"></feFlood>
                    <feMorphology
                      operator="erode"
                      radius="1"
                      in="SourceAlpha"
                      result="erode"
                    ></feMorphology>
                    <feComposite
                      operator="in"
                      in="flood-1"
                      in2="erode"
                      result="comp1"
                    ></feComposite>
                    <feConvolveMatrix
                      order="3 3"
                      divisor="16"
                      in="comp1"
                      result="convolve"
                      kernelMatrix="1 2 1 2 4 2 1 2 1"
                    ></feConvolveMatrix>
                    <feOffset
                      dx="0"
                      dy="0"
                      in="convolve"
                      result="extrude"
                    ></feOffset>
                    <feComposite
                      operator="in"
                      in="flood-1"
                      in2="extrude"
                      result="comp-extrude"
                    ></feComposite>
                    <feFlood
                      floodColor="rgba(20%,20%,20%,0)"
                      result="flood-2"
                    ></feFlood>
                    <feComposite
                      operator="in"
                      in="flood-2"
                      in2="SourceAlpha"
                      result="comp2"
                    ></feComposite>
                    <feMorphology
                      operator="dilate"
                      radius="1"
                      in="comp2"
                      result="dilate"
                    ></feMorphology>
                    <feOffset
                      dx="0"
                      dy="0"
                      in="dilate"
                      result="offset"
                    ></feOffset>
                    <feGaussianBlur
                      in="offset"
                      stdDeviation="5.8"
                      result="blur"
                    ></feGaussianBlur>
                    <feComponentTransfer in="blur" result="shadow">
                      <feFuncA
                        type="linear"
                        slope="0.8"
                        intercept="-0.2"
                      ></feFuncA>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="shadow"></feMergeNode>
                      <feMergeNode in="comp-extrude"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                </defs>
                <g filter="url(#editing-extrude-glow)">
                  <g transform="translate(217.0300076007843, 102.00000190734863)">
                    <path
                      d="M5.31-11.25L5.31-11.25L1.47-11.25L1.47-13.50L5.31-13.50L5.31-13.50Q6.97-13.50 8.09-14.75L8.09-14.75L8.09-14.75Q9.22-16 9.22-18.06L9.22-18.06L9.22-51.75L11.47-51.75L11.47-18.06L11.47-18.06Q11.47-15.09 9.69-13.17L9.69-13.17L9.69-13.17Q7.91-11.25 5.31-11.25ZM5.31-6.75L5.31-6.75L1.47-6.75L1.47-9L5.31-9L5.31-9Q8.81-9 11.27-11.66L11.27-11.66L11.27-11.66Q13.72-14.31 13.72-18.06L13.72-18.06L13.72-51.75L15.97-51.75L15.97-18.06L15.97-18.06Q15.97-13.38 12.86-10.06L12.86-10.06L12.86-10.06Q9.75-6.75 5.31-6.75ZM5.31-2.25L5.31-2.25L1.47-2.25L1.47-4.50L5.31-4.50L5.31-4.50Q10.69-4.50 14.45-8.47L14.45-8.47L14.45-8.47Q18.22-12.44 18.22-18.06L18.22-18.06L18.22-51.75L20.47-51.75L20.47-18.06L20.47-18.06Q20.47-13.78 18.45-10.14L18.45-10.14L18.45-10.14Q16.44-6.50 12.94-4.38L12.94-4.38L12.94-4.38Q9.44-2.25 5.31-2.25ZM5.31 2.25L5.31 2.25L1.47 2.25L1.47 0L5.31 0L5.31 0Q8.88 0 12.09-1.44L12.09-1.44L12.09-1.44Q15.31-2.88 17.64-5.30L17.64-5.30L17.64-5.30Q19.97-7.72 21.34-11.06L21.34-11.06L21.34-11.06Q22.72-14.41 22.72-18.06L22.72-18.06L22.72-51.75L24.97-51.75L24.97-18.06L24.97-18.06Q24.97-13.94 23.42-10.19L23.42-10.19L23.42-10.19Q21.88-6.44 19.23-3.70L19.23-3.70L19.23-3.70Q16.59-0.97 12.95 0.64L12.95 0.64L12.95 0.64Q9.31 2.25 5.31 2.25ZM30.72 0L30.72-51.75L32.97-51.75L32.97 0L30.72 0ZM44.22 0L44.22-51.75L46.47-51.75L46.47-11.25L64.47-11.25L64.47-9L46.47-9L46.47-6.75L64.47-6.75L64.47-4.50L46.47-4.50L46.47-2.25L64.47-2.25L64.47 0L44.22 0ZM39.72 0L39.72-51.75L41.97-51.75L41.97 0L39.72 0ZM35.22 0L35.22-51.75L37.47-51.75L37.47 0L35.22 0Z"
                      fill="#181818"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex w-1/2 flex-col justify-between md:pl-6 lg:w-9/12 lg:flex-row-reverse lg:items-center lg:pl-0">
              <ul className="text-[15px] font-normal leading-[1.1] lg:flex lg:w-full lg:max-w-[440px] lg:justify-between">
                <li className="whitespace-nowrap py-2">
                  <a
                    href="https://www.linkedin.com/in/julien-le-mee/"
                    className="flex items-center gap-2 lg:hover:underline"
                    target="_blank"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#000000"
                    >
                      <path
                        d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7 17V13.5V10"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7 7.01L7.01 6.99889"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    Linkedin
                  </a>
                </li>
                <li className="whitespace-nowrap py-2">
                  <a
                    href="https://github.com/julienLeMee"
                    className="flex items-center gap-2 lg:hover:underline"
                    target="_blank"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#000000"
                    >
                      <path
                        d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    Github
                  </a>
                </li>
                <li className="whitespace-nowrap py-2">
                  <a
                    href="https://x.com/majin__bun"
                    className="flex items-center gap-2 lg:hover:underline"
                    target="_blank"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#000000"
                    >
                      <path
                        d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z"
                        stroke="#000000"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M20 3L4 21"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    Twitter/X
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
          <div className="mt-4 text-xs flex justify-end w-full text-[#181818]/50">
            Design largely inspired by Awwwards submissions, particularly from
            hellohelloteam, seb_sma, and pablo-picart.
          </div>
        </div>
      </div>
    </>
  );
}
