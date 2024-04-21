import Image from "next/image"

export interface CardProps {

}


export const Card = () => {
  return (
    <article className="border border-blue-500 rounded-lg">
      <header className="border rounded-md m-4 border-gray-300">
        <figure className="m-0">
          <Image src={"https://img.freepik.com/vetores-gratis/pessoas-focadas-estudando-na-escola-on-line_74855-5834.jpg?w=740&t=st=1713698598~exp=1713699198~hmac=8feb6698c2b0002569cc235b3589a90a1e7fad805e14ad4fb27376684af1d1f3"} alt="Descrição" width={320} height={160} style={{borderRadius: 16}}/>
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
    </article>
  )
}

export default Card