import { Accordion } from "@/components/Accordion/Accordion";
import Button from "@/components/Button/Button"
import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal"
import Sidebar from "@/components/SideBar/Sidebar";
import Switch from "@/components/Switch/Switch"
import Typography from "@/components/Typography/Typography";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Footer } from "@/components/Footer/Footer";
import ForcaSenha from "@/components/ForcaSenha/ForcaSenha";



// Teste de componentes 
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>


      <main className=" h-full w-full container bg-gray-600">
        <div>
          <Accordion/>
        </div>
        <div className="bg-gray-200 m-2 p-2 flex justify-center ">
          <ForcaSenha/>
        </div>
        <div className="flex ">
          <Footer />
        </div>
      </main>
    </>
  )
}
export default App