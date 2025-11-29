import Link from "next/link";

export const sidebarContent = {
  processor: <Link href="/products/cpu" className="text-sm">Processor (CPU)</Link>,
  motherboard: <Link href="/products/motherboard" className="text-sm">Motherboard</Link>,
  memory: <Link href="/products/memory-ram" className="text-sm">Memory (RAM)</Link>,
  storage: <Link href="/products/storage" className="text-sm">Storage</Link>,
  gpu: <Link href="/products/gpu" className="text-sm">Graphics Card (GPU)</Link>,
  psu: <Link href="/products/psu" className="text-sm">Power Supply (PSU)</Link>,
  computerCase: <Link href="/products/computer-case" className="text-sm">Computer Case</Link>,
  caseFans: <Link href="/products/case-fan" className="text-sm">Case Fan</Link>,
  cpuCoolerAir: <Link href="/products/cpu-cooler-air" className="text-sm">CPU Cooler (AIR)</Link>,
  cpuCoolerAio: <Link href="/products/cpu-cooler-aio" className="text-sm">CPU Cooler (AIO)</Link>,
  cable: <Link href="/products/cable" className="text-sm">Cables</Link>,
  networking: <Link href="/products/networking" className="text-sm">Networking</Link>,
  keyboard: <Link href="/products/keyboard" className="text-sm">Keyboard</Link>,
  mouse: <Link href="/products/mouse" className="text-sm">Mouse</Link>,
  mousePad: <Link href="/products/mouse-pad" className="text-sm">Mouse Pad</Link>,
  headset: <Link href="/products/headset" className="text-sm">Headset</Link>,
  audio: <Link href="/products/audio" className="text-sm">Audio</Link>,
  monitor: <Link href="/products/monitor" className="text-sm">Monitor</Link>,
  monitorArm: <Link href="/products/monitor-arm" className="text-sm">Monitor Arm</Link>,
};
