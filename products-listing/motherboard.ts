export const motherboard = [
  {
    // ============================================
    // CORE PRODUCT INFO
    // ============================================
    id: 1,
    sku: "PRIME-B850M-A-WIFI-CSM",
    slug: "asus-prime-b850m-a-wifi-csm",
    category: "motherboard",
    brand: "ASUS",
    model: "PRIME B850M-A WIFI-CSM",
    
    // ============================================
    // INVENTORY & PRICING
    // ============================================
    pricing: {
      amount: 11500,
      currency: "PHP",
      formatted: "Php 11,500.00",
      msrp: 12000, // optional: manufacturer suggested retail price
      onSale: false,
      salePrice: null
    },
    
    inventory: {
      inStock: true,
      quantity: 15,
      lowStockThreshold: 5,
      status: "in_stock" // in_stock | low_stock | out_of_stock | pre_order
    },
    
    // ============================================
    // MARKETING CONTENT
    // Used for: Product pages, listings, ads, SEO
    // ============================================
    marketing: {
      // Short tagline for cards/listings
      tagline: "Advanced AI PC-Ready • Wi-Fi 6E • DDR5 Support",
      
      // Main product description (customer-facing)
      headline: "Unleash AMD Ryzen™ 9000 Series Performance",
      q
      description: "ASUS Prime series motherboards are expertly engineered to unleash the full potential of AMD Ryzen™ 9000 series processors. The PRIME B850M-A WIFI-CSM motherboard provides users and PC DIY builders with a range of performance optimizations via intuitive software and firmware features. It's designed to be Advanced AI PC-ready, offering the power and connectivity needed for demanding AI applications.",
      
      // Key selling points (for bullet lists, feature highlights)
      keyFeatures: [
        "AMD B850 chipset with support for Ryzen™ 9000/8000/7000 series",
        "DDR5 memory support up to 8000+ MT/s with AMD EXPO™",
        "PCIe 5.0 x16 slot for next-gen graphics cards",
        "Wi-Fi 6E and 2.5Gb Ethernet for ultra-fast connectivity",
        "3x M.2 slots with heatsinks for fast storage",
        "ASUS 5X Protection III with SafeSlot and premium components",
        "AI-powered tuning with Armoury Crate and ASUS AI Advisor"
      ],
      
      // Target audience segments
      targetAudience: ["pc_builders", "gamers", "content_creators", "ai_enthusiasts"],
      
      // Use cases (for marketing copy)
      useCases: [
        "High-performance gaming builds",
        "AI and machine learning workstations",
        "Content creation and streaming setups",
        "Compact mATX builds"
      ],
      
      // SEO metadata
      seo: {
        title: "ASUS PRIME B850M-A WIFI-CSM - AMD B850 mATX Motherboard",
        metaDescription: "Build your dream AMD Ryzen™ 9000 series PC with the ASUS PRIME B850M-A WIFI-CSM. Features DDR5, PCIe 5.0, Wi-Fi 6E, and AI-ready performance.",
        keywords: ["ASUS motherboard", "B850", "AM5", "DDR5", "Wi-Fi 6E", "mATX"]
      },
      
      // Awards, certifications, badges
      badges: ["ai_pc_ready", "wifi_6e", "pcie_5.0"],
      awards: []
    },
    
    // ============================================
    // MEDIA ASSETS
    // ============================================
    media: {
      // Primary image for thumbnails and cards
      thumbnail: "/assets/motherboard/apb850mawcsm/1.png",
      
      // Hero/featured image for product page
      hero: "/assets/motherboard/apb850mawcsm/2.png",
      
      // Full gallery for product page carousel
      gallery: [
        "/assets/motherboard/apb850mawcsm/1.png",
        "/assets/motherboard/apb850mawcsm/2.png",
        "/assets/motherboard/apb850mawcsm/3.png",
        "/assets/motherboard/apb850mawcsm/4.png",
        "/assets/motherboard/apb850mawcsm/5.png",
        "/assets/motherboard/apb850mawcsm/6.png"
      ],
      
      // Optional: lifestyle or promotional images
      lifestyle: [],
      
      // Optional: video URLs
      videos: []
    },
    
    // ============================================
    // TECHNICAL SPECIFICATIONS
    // Used for: Spec sheets, comparison tools, filters
    // ============================================
    specifications: {
      // Basic technical info
      basic: {
        formFactor: "Micro-ATX",
        dimensions: "24.4 x 24.4 cm",
        chipset: "AMD B850",
        biosType: "UEFI AMI BIOS",
        biosSize: "256 Mb Flash ROM"
      },
      
      // CPU/Processor support
      processor: {
        socket: "AM5",
        supportedSeries: ["Ryzen 9000", "Ryzen 8000", "Ryzen 7000"],
        supportedTypes: ["Desktop Processors"],
        manufacturer: "AMD"
      },
      
      // Memory specifications
      memory: {
        type: "DDR5",
        slots: 4,
        maxCapacity: 256, // GB
        maxCapacityUnit: "GB",
        channels: 2,
        channelArchitecture: "Dual Channel",
        maxSpeed: 8000, // MT/s
        maxSpeedUnit: "MT/s",
        overclock: true,
        eccSupport: true,
        unbuffered: true,
        xmpProfiles: ["AMD EXPO", "ASUS AEMP"]
      },
      
      // Storage options
      storage: {
        m2: {
          slots: 3,
          interfaces: ["PCIe 5.0", "PCIe 4.0"],
          formFactors: ["2280", "22110"]
        },
        sata: {
          ports: 4,
          speed: "6Gb/s"
        },
        raid: {
          supported: true,
          levels: ["0", "1", "5", "10"]
        }
      },
      
      // Expansion slots
      expansion: {
        slots: [
          {
            type: "PCIe",
            version: "5.0",
            physicalSize: "x16",
            electricalLanes: 16,
            compatibility: ["Ryzen 9000", "Ryzen 7000"]
          },
          {
            type: "PCIe",
            version: "4.0",
            physicalSize: "x16",
            electricalLanes: 16,
            compatibility: ["Ryzen 8000"]
          },
          {
            type: "PCIe",
            version: "4.0",
            physicalSize: "x16",
            electricalLanes: 1,
            source: "Chipset"
          }
        ]
      },
      
      // Graphics/Display outputs
      graphics: {
        outputs: [
          { type: "DisplayPort", quantity: 2, version: "1.4" },
          { type: "HDMI", quantity: 1, version: "2.1" }
        ],
        maxDisplays: 3,
        integratedGraphicsRequired: true
      },
      
      // Networking
      networking: {
        ethernet: {
          chipset: "Realtek",
          speed: "2.5Gb",
          ports: 1
        },
        wireless: {
          standard: "Wi-Fi 6E",
          chipset: "Intel", // if known
          bluetooth: "5.3"
        }
      },
      
      // Audio
      audio: {
        chipset: "Realtek",
        channels: "7.1",
        codec: "HD Audio",
        features: ["Surround Sound"]
      },
      
      // USB and connectivity
      io: {
        rear: {
          usb: [
            { type: "USB 3.2 Gen 2x2", speed: "10Gbps", quantity: 2 },
            { type: "USB 3.2 Gen 1", speed: "5Gbps", quantity: 2 },
            { type: "USB 2.0", speed: "480Mbps", quantity: 4 }
          ],
          display: [
            { type: "DisplayPort", quantity: 2 },
            { type: "HDMI", quantity: 1 }
          ],
          network: [
            { type: "RJ45 Ethernet", speed: "2.5Gb", quantity: 1 }
          ],
          audio: [
            { type: "3.5mm Jack", quantity: 3, configuration: "Line In/Out/Mic" }
          ],
          other: ["Wi-Fi Antenna Connectors", "BIOS FlashBack Button"]
        },
        
        internal: {
          usb: [
            { type: "USB-C 3.2 Gen 1", speed: "5Gbps", headers: 1 },
            { type: "USB 3.2 Gen 1", speed: "5Gbps", headers: 1 },
            { type: "USB 2.0", speed: "480Mbps", headers: 2 }
          ],
          power: [
            { type: "ATX 24-pin", quantity: 1 },
            { type: "EPS 8-pin", quantity: 1 },
            { type: "EPS 4-pin", quantity: 1 }
          ],
          fan: {
            cpuHeaders: 1,
            chassisHeaders: 3,
            pumpHeaders: 1,
            pwmSupport: true
          },
          rgb: {
            addressableHeaders: 2,
            standardHeaders: 1
          },
          other: [
            { type: "TPM header", quantity: 1 },
            { type: "Front panel header", quantity: 1 },
            { type: "Speaker header", quantity: 1 },
            { type: "Clear CMOS jumper", quantity: 1 }
          ]
        }
      },
      
      // Special hardware features
      features: {
        protection: ["ASUS 5X Protection III", "SafeSlot", "Overvoltage Protection"],
        cooling: ["VRM heatsinks", "M.2 heatsinks", "PCH heatsink"],
        design: ["Q-LED Diagnostics", "Q-Slot", "Q-DIMM"],
        lighting: ["Aura Sync RGB", "Addressable RGB headers"],
        overclocking: ["AI Overclocking", "Fan Xpert 2+", "TurboV Processing Unit"]
      },
      
      // Software bundle
      software: {
        utilities: [
          "Armoury Crate",
          "Fan Xpert 2+",
          "ASUS AI Advisor",
          "ASUS CPU-Z"
        ],
        drivers: ["Chipset", "Audio", "LAN", "Wi-Fi", "Bluetooth"]
      },
      
      // OS compatibility
      os: {
        supported: ["Windows 11", "Windows 10"],
        architecture: "64-bit",
        linuxCompatibility: "Check manufacturer"
      },
      
      // Power requirements
      power: {
        recommended: 650, // Watts (for typical build)
        cpuPhases: 8,
        socPhases: 2
      }
    },
    
    // ============================================
    // PACKAGE CONTENTS
    // ============================================
    package: {
      included: [
        "ASUS PRIME B850M-A WIFI-CSM Motherboard",
        "2x SATA 6Gb/s cables",
        "Wi-Fi antenna",
        "M.2 mounting screws",
        "Quick start guide",
        "Driver and utility disc"
      ],
      warranty: {
        duration: 3,
        unit: "years",
        type: "Limited manufacturer warranty",
        registrationRequired: false
      }
    },
    
    // ============================================
    // METADATA
    // ============================================
    metadata: {
      createdAt: "2025-01-15T00:00:00Z",
      updatedAt: "2025-01-15T00:00:00Z",
      publishedAt: "2025-01-15T00:00:00Z",
      featured: false,
      isNew: true,
      isActive: true
    }
  }
];

// ============================================
// TYPE DEFINITIONS (if using TypeScript)
// ============================================
/*
interface Product {
  id: number;
  sku: string;
  slug: string;
  category: string;
  brand: string;
  model: string;
  pricing: Pricing;
  inventory: Inventory;
  marketing: Marketing;
  media: Media;
  specifications: Specifications;
  package: Package;
  metadata: Metadata;
}
*/