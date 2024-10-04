import Image from "next/image";
import { prefix } from "./prefix"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-6 font-[family-name:var(--font-geist-sans)] mt-0">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <Image
            className="dark:invert"
            src={`${prefix}/images/logo.png`} 
            alt="logo"
            width={120}
            height={120}
            priority
          />

        <div className="text-2xl font-bold">YES! 格言 </div>
        <div className="text-1xl font-bold">自我激励 自我肯定 名人名言 励志 金句</div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>无论您是面临挑战，还是寻求灵感，这款应用都将成为您生活中不可或缺的正能量来源。</li>
          <li>这是一款专注于提供日常激励和正能量的移动应用，旨在帮助用户保持积极向上的心态，激发内在动力，实现个人成长。</li>
          <li>Yes!格言不仅仅是一个简单的格言展示应用，它是您口袋中的私人激励教练。通过每日更新的智慧箴言，帮助您建立积极的思维模式，激发内在潜能，朝着更好的自己不断前进。</li> 
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">

          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://play.google.com/store/apps/details?id=com.yesyoucan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert rotate-90"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Get from Google Play
          </a>
        </div>


        <div className="flex gap-4">
          <Image
            className="dark:invert"
            src={`${prefix}/images/1.webp`} 
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Image
            className="dark:invert"
            src={`${prefix}/images/2.webp`} 
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Image
            className="dark:invert"
            src={`${prefix}/images/3.webp`} 
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Image
            className="dark:invert"
            src={`${prefix}/images/4.webp`} 
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Image
            className="dark:invert"
            src={`${prefix}/images/5.webp`} 
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
