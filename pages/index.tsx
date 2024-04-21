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
      <div className=" bg-gray-100">
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
        <div >
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Titulo">
            <Typography>
              Today, every company I talk to wants to implement a design system from
              scratch. Unfortunately, the details of a design system are not
              explored, so often they are not used to the maximum to create a useful
              user experience.
            </Typography>
            <Typography>
              New designers can take a look at any of the design patterns listed
              below to learn best practices and make informed design decisions on
              their projects.
            </Typography>
            <div className=" flex flex-col gap-3">
              <Button onClick={() => setIsOpen(false)}>Primary Button</Button>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Secondary Button
              </Button>
            </div>
          </Modal>
        </div>
      </div>




    </>
  )
}
export default App