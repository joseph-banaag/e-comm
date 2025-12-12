import Link from "next/link";

export const storeLinks = {
  motherboard: <Link href="/products/motherboard">Motherboard</Link>,
  processor: <Link href="/products/cpu">Processor</Link>,
  memory: <Link href="/products/ram">Memory</Link>,
  storage: <Link href="/products/storage">Storage</Link>,
  gpu: <Link href="/products/gpu" className="whitespace-nowrap">Graphics Card</Link>,
  psu: <Link href="/products/psu" className="whitespace-nowrap">Power Supply</Link>,
  computer_case: <Link href="/products/case" className="whitespace-nowrap">Computer Case</Link>,
  case_fans: <Link href="/products/case-cooler">Case Fans</Link>,
  cpu_cooler_air: <Link href="/products/cpu-cooler-air">Cooler AIR</Link>,
  cpu_cooler_aio: <Link href="/products/cpu-cooler-aio">Cooler AIO</Link>,
  cable: <Link href="/products/cable">Cable</Link>,
  networking: <Link href="/products/networking">Networking</Link>,
  keyboard: <Link href="/products/keyboard">Keyboard</Link>,
  mouse: <Link href="/products/mouse">Mouse</Link>,
  mouse_pad: <Link href="/products/mouse-pad">Mouse pad</Link>,
  headset: <Link href="/products/headset">Headset</Link>,
  audio: <Link href="/products/audio">Audio</Link>,
  monitor: <Link href="/products/monitor">Monitor</Link>,
  monitor_arm: <Link href="/products/monitor-arm">Monitor Arm</Link>,
};