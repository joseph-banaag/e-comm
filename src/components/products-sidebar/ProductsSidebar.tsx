import { sidebarContent } from "@/components/constants/dropdown_items";

const ProductsSidebar = () => {
  return (
    <section className="fixed left-0 top-0 mt-10">
      <div className="flex flex-col max-w-40 min-h-screen border p-2">
        <p className="text-xs text-gray-200">Main components</p>
        <ul className="px-2 mb-3">
          {/* todo: separate lines with alternating bg color like gray-500 and gray-700 */}
          <li>{sidebarContent.processor}</li>
          <li>{sidebarContent.motherboard}</li>
          <li>{sidebarContent.memory}</li>
          <li>{sidebarContent.storage}</li>
          <li>{sidebarContent.gpu}</li>
          <li>{sidebarContent.psu}</li>
          <li>{sidebarContent.computerCase}</li>
          <li>{sidebarContent.caseFans}</li>
        </ul>
        <p className="text-xs text-gray-200">Coolers</p>
        <ul className="px-2 mb-3">
          <li>{sidebarContent.cpuCoolerAio}</li>
          <li>{sidebarContent.cpuCoolerAir}</li>
        </ul>
        <p className="text-xs text-gray-200">Accessories & Peripherals</p>
        <ul className="px-2 mb-3">
          <li>{sidebarContent.cable}</li>
          <li>{sidebarContent.networking}</li>
          <li>{sidebarContent.keyboard}</li>
          <li>{sidebarContent.mouse}</li>
          <li>{sidebarContent.mousePad}</li>
          <li>{sidebarContent.headset}</li>
          <li>{sidebarContent.audio}</li>
          <li>{sidebarContent.monitor}</li>
        </ul>
        <p className="text-xs text-gray-200">Other</p>
        <ul className="px-2 mb-3">
          <li>{sidebarContent.monitorArm}</li>
        </ul>



      </div>
    </section>
  );
};

export default ProductsSidebar;
