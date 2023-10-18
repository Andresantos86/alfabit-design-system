import Button from "@/components/Button/Button"
import Modal from "@/components/Modal/Modal"
import Switch from "@/components/Switch/Switch"
import Typography from "@/components/Typography/Typography";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" mx-auto my-0 w-1/5 flex justify-center">
        <Button className="m-2 " onClick={() => setIsOpen(true)}>Abrir Modal</Button>
        <div className="w-9 flex flex-col gap-1 justify-start">
          <Switch />


        </div>
      </div>
      <div className=" ">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Nathan">
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
          console.log("OI")
          <div className=" flex flex-col gap-3">
            <Button onClick={() => setIsOpen(false)}>Primary Button</Button>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Secondary Button
            </Button>
          </div>
        </Modal>
      </div>

    </>
  )
}
export default App