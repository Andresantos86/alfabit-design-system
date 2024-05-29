import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export interface CardProps {

}



export const Card = () => {
  return (
    <Link href={""} >
      <article className="relative  rounded-[10px]
    shadow-[16px_16px_20px_#0000008c]
    before:absolute
    overflow-hidden
    before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
    before:bg-[conic-gradient(transparent,transparent,#7ab5cf)]
    before:animate-spin-slow ">
        <div className="relative  bg-gray-200 m-[5px] rounded-md ">
          <header className="border p-1 rounded-md  border-gray-300">
            <figure className="">
              <Image src={"https://img.freepik.com/vetores-gratis/pessoas-focadas-estudando-na-escola-on-line_74855-5834.jpg?w=740&t=st=1713698598~exp=1713699198~hmac=8feb6698c2b0002569cc235b3589a90a1e7fad805e14ad4fb27376684af1d1f3"} alt="Descrição" width={320} height={160} style={{ borderRadius: 16 }} />
              <div className=" bottom-0 -m-4 justify-center flex ">
                <div className="flex bg-white px-2 py-1 rounded-lg ">
                  <p className="flex items-center font-medium text-gray-800">
                    Aqui vai um botão
                  </p>
                </div>
              </div>
            </figure>

          </header>
          <section className="p-2 flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Aqui vai um titulo</h2>
            <p className=" text-md">Aqui vai a descrição</p>
          </section>
          <footer className="p-2">
            Rodapé
          </footer>
        </div>
      </article>
    </Link>
  )
}

export default Card