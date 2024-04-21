import { XMarkIcon } from "@heroicons/react/24/outline";
export type SidebarProps = {

}

export const Sidebar = ({ }: SidebarProps) => {
  return (
    <div className="flex">
      <input type="checkbox" id="drawer-toggle" className="relative sr-only peer"  />
      <label htmlFor="drawer-toggle" className="absolute top-0 left-0 inline-block p-1 mt-1 ml-[68px] transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-[120px]">
        <div className=" mb-3 -rotate-45 bg-white "></div>
        


      </label>
      <div className="fixed top-0 left-0 z-20 w-56 h-full transition-all duration-500 transform -translate-x-[120px] bg-white shadow-lg peer-checked:translate-x-0 peer-disabled:w-6">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">Drawer</h2> 
            <p className="text-gray-500">This is a drawer.</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar