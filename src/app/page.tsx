import Image from "next/image";

import Qrcode from '../assets/image-qr-code.png';

export default function Home() {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <div className="bg-white rounded-[20px] p-4 pb-10 flex flex-col items-center gap-6">
        <Image priority quality={100} className="rounded-[10px] w-full max-w-[18rem] aspect-square" src={Qrcode} alt="Qrcode" />
        <div className="flex flex-col gap-4 max-w-[18rem]">
          <h1 className="font-bold text-slate-900 text-[1.375rem] letter tracking-normal text-center leading-[1.20]">Improve your front-end skills by building projects</h1>
          <p className="text-slate-500 tracking-wide text-center text-[0.9375rem] leading-[1.40]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  );
}
