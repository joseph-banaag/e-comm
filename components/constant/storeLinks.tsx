import {CircleUserRound, Heart, HomeIcon, Percent, ShoppingCart} from "lucide-react";

export const subNavLinks = [
  {
    route: "/products/cpu",
    label: "Processor (CPU)",
  },
  {
    route: "/products/motherboard",
    label: "Motherboard",
  },
  {
    route: "/products/ram",
    label: "Memory (RAM)",
  },
  {
    route: "/products/gpu",
    label: "Graphics (GPU)",
  },
  {
    route: "/products/psu",
    label: "Power Supply (PSU)",
  },
  {
    route: "/products/storage",
    label: "Storage",
  },
  {
    route: "/products/pc-case",
    label: "PC Case",
  },
  {
    route: "/on-sale",
    label: "Sale",
  }
]

export const storeLinksList = [
  {
    route: "/products/motherboard",
    label: "Motherboard"
  },
  {
    route: "/products/cpu",
    label: "Processor (CPU)"
  },
  {
    route: "/products/ram",
    label: "Memory (RAM)"
  },
  {
    route: "/products/storage",
    label: "Storage"
  },
  {
    route: "/products/gpu",
    label: "Graphics Card (GPU)"
  },
  {
    route: "/products/psu",
    label: "Power Supply (PSU)"
  }, {
    route: "/products/case",
    label: "Computer Case"
  },
  {
    route: "/products/case-cooler",
    label: "Case Fans"
  },
  {
    route: "/products/cpu-cooler-air",
    label: "CPU Cooler AIR"
  },
  {
    route: "/products/cpu-cooler-aio",
    label: "CPU Cooler AIO"
  },
  {
    route: "/products/cable",
    label: "Cable"
  },
  {
    route: "/products/networking",
    label: "Networking"
  },
  {
    route: "/products/keyboard",
    label: "Keyboard"
  },
  {
    route: "/products/mouse",
    label: "Mouse"
  },
  {
    route: "/products/mouse-pad",
    label: "Mouse pad"
  },
  {
    route: "/products/headset",
    label: "Headset"
  },
  {
    route: "/products/audio",
    label: "Audio"
  },
  {
    route: "/products/monitor",
    label: "Monitor"
  },
  {
    route: "/products/monitor_arm",
    label: "Monitor Arm"
  }
];

export const collapsibleLinks = [
  {
    route: "/products/case-cooler",
    label: "Case Fans"
  },
  {
    route: "/products/cpu-cooler-air",
    label: "Cooler AIR"
  },
  {
    route: "/products/cpu-cooler-aio",
    label: "Cooler AIO"
  },
  {
    route: "/products/cable",
    label: "Cable"
  },
  {
    route: "/products/networking",
    label: "Networking"
  },
  {
    route: "/products/keyboard",
    label: "Keyboard"
  },
  {
    route: "/products/mouse",
    label: "Mouse"
  },
  {
    route: "/products/mouse-pad",
    label: "Mouse Pad"
  },
  {
    route: "/products/headset",
    label: "Headset"
  },
  {
    route: "/products/audio",
    label: "Audio"
  },
  {
    route: "/products/monitor",
    label: "Monitor"
  },
  {
    route: "/products/monitor-arm",
    label: "Monitor Arm"
  },
]

export const bottomNavLinks = [
  {
    route: "/",
    label: "Home",
    icon: <HomeIcon className="size-4"/>,
  },
  {
    route: "/on-sale",
    label: "Sale",
    icon: <Percent className="size-4"/>
  },
  {
    route: "/cart",
    label: "Cart",
    icon: <ShoppingCart className="size-4"/>
  },
  {
    route: "/favorites",
    label: "Favorites",
    icon: <Heart className="size-4"/>
  },
  {
    route: "/profile",
    label: "Profile",
    icon: <CircleUserRound className="size-4"/>
  }
]