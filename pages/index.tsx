import { Accordion } from "@/components/Accordion/Accordion";
import Button from "@/components/Button/Button"
import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal"
import Sidebar from "@/components/SideBar/Sidebar";
import Switch from "@/components/Switch/Switch"
import Typography from "@/components/Typography/Typography";
import { useState } from "react";



// Teste de componentes 
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" bg-gray-100 ">
        <Sidebar />
        <Accordion />
        <main className="w-[calc(100%-3.73rem)] ml-auto flex">
          <div className="2xl:container mx-auto space-y-6">
            <div className="h-16 border-b border-gray-300/40 dark:border-gray-700">


            </div>
            <div className=" flex justify-center items-center rounded-2xl border border-dashed border-gray-300/40">

              <div className="">
                <span className="text-gray-500">Conteudo</span>
                <Button className="m-2 " onClick={() => setIsOpen(true)}>Abrir Modal</Button>

              </div>           

            </div>
            <div className="m-2">
              <Card />
            </div>
          </div>
        </main>
      </div>




    </>
  )
}
export default App