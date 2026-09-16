import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'paints',
    number: '01',
    title: 'Paints',
    shortDesc: 'Beautiful finishes for lasting impressions.',
    fullDesc: 'Expert surface preparation and luxury paint finishes that elevate your walls and exteriors with enduring color vibrancy, zero chalking, and superior weather resistance across Bengaluru.',
    features: [
      'Luxury Emulsion & Royal Designer Wall Textures',
      'Complete Surface Putty, Primer & Crack Filling',
      'Airless Spray Application & Seamless Edge Cutting',
      'Weather-Resistant Exterior Silicone Wall Coatings',
      'Odor-Free, Non-Toxic & 100% Washable Formulations',
      'Dedicated Masking & Post-Painting Site Cleaning'
    ],
    iconName: 'PaintRoller',
    badgeColor: '#E08A27',
    accentColor: '#F59E0B',
    category: 'interiors',
    image: '/assets/services/service-01-paints.jpg'
  },
  {
    id: 'pop',
    number: '02',
    title: 'POP',
    shortDesc: 'Elegant ceilings for modern living.',
    fullDesc: 'Architectural Plaster of Paris (POP) and gypsum false ceilings engineered with precision galvanized framing, concealed LED cove light channels, and decorative molding profiles.',
    features: [
      'Architectural False Ceilings with Perimeter Cove Lighting',
      'Heavy-Duty Galvanized Steel Framework & GI Channels',
      'Seamless Gypsum Board Jointing & Leveling Compound',
      'Curved, Stepped & Multi-Tier Designer Drop Ceilings',
      'Acoustic Damping & Thermal Insulation Capabilities',
      'Zero-Sag Guarantee with Certified Hanging Anchors'
    ],
    iconName: 'POPTrowel',
    badgeColor: '#557849',
    accentColor: '#65A30D',
    category: 'interiors',
    image: '/assets/services/service-02-pop.jpg'
  },
  {
    id: 'carpenter',
    number: '03',
    title: 'Carpenter',
    shortDesc: 'Custom woodwork for your unique style.',
    fullDesc: 'Master craftsmanship in bespoke joinery, architectural wooden doors, fluted wall paneling, floating entertainment consoles, and solid teak furniture built to last generations.',
    features: [
      'Custom Joinery, Paneling & Architectural Millwork',
      'Solid Teak & Engineered Flush Doors with Hardwood Jambs',
      'Designer Fluted TV Media Consoles & Partition Walls',
      'Vanity Counters, Shoe Cabinets & Under-Stair Storage',
      'Branded Heavy-Duty Soft-Close Hinges & Runners',
      'Bespoke Polish, Veneer Laying & PU Matte Finishes'
    ],
    iconName: 'CarpenterFrame',
    badgeColor: '#9B5E34',
    accentColor: '#B45309',
    category: 'interiors',
    image: '/assets/services/service-03-carpenter.jpg'
  },
  {
    id: 'modular-kitchen-wardrobe',
    number: '04',
    title: 'Modular Kitchen / Customized Wardrobe',
    shortDesc: 'Smart storage. Better living.',
    fullDesc: 'Ergonomically planned modular kitchens, island counters, and floor-to-ceiling customized wardrobes crafted with 100% boiling-water-proof (BWP) marine ply and premium German hardware.',
    features: [
      'Custom Island, Parallel & L-Shaped Kitchen Layouts',
      'IS:710 Marine Grade Plywood with Acrylic & Laminate Finishes',
      'Floor-to-Ceiling Walk-in Closets & Sliding Wardrobes',
      'Concealed Sensor LED Strips & Integrated Dresser Units',
      'Blum / Hafele Soft-Close Tandem Boxes & Lift-up Systems',
      'Quartz Countertops with Seamless Undermount Sink Cutting'
    ],
    iconName: 'WardrobeDoors',
    badgeColor: '#6A217B',
    accentColor: '#9333EA',
    category: 'interiors',
    image: '/assets/services/service-04-modular-kitchen.jpg'
  },
  {
    id: 'fabrication',
    number: '05',
    title: 'Fabrication',
    shortDesc: 'Strong structures for a lasting tomorrow.',
    fullDesc: 'Precision metal fabrication and heavy-duty structural steelwork, delivering modern entrance gates, glass balcony railings, industrial pergolas, and laser-cut architectural screens.',
    features: [
      'Structural Steel (MS & SS 304/316) Framework Fabrication',
      'Architectural Glass & Stainless Steel Balcony Railings',
      'Weather-Resistant Terrace Pergolas & Polycarbonate Roofs',
      'Precision Laser-Cut CNC Security Gates & Window Grills',
      'Anti-Corrosion Epoxy Zinc Phosphate Primer Treatment',
      'Rigid Load-Bearing Safety Compliance & Seamless Welding'
    ],
    iconName: 'WelderMask',
    badgeColor: '#18727E',
    accentColor: '#06B6D4',
    category: 'construction',
    image: '/assets/services/service-05-fabrication.jpg'
  },
  {
    id: 'plumbing',
    number: '06',
    title: 'Plumbing',
    shortDesc: 'Safe flow. Seamless living.',
    fullDesc: 'Engineered sanitary and concealed water supply distribution, pressure testing, premium bathroom fixture installations, and clog-free drainage networks built for lifelong reliability.',
    features: [
      'Concealed CPVC / UPVC Hot & Cold Water Distribution',
      'Concealed Flush Tanks & Wall-Hung Commode Mounting',
      'Diverters, Thermostatic Mixers & Overhead Rain Showers',
      'Multi-Stage Water Pressure Boosting & Hydro-Pneumatic Pumps',
      'Acoustic SWR Soil & Waste Pipe Routing with P-Traps',
      '100% Hydrostatic Pressure Leak Testing Before Concealment'
    ],
    iconName: 'PlumbingPipe',
    badgeColor: '#1D6FB8',
    accentColor: '#3B82F6',
    category: 'utilities',
    image: '/assets/services/service-06-plumbing.jpg'
  },
  {
    id: 'electricals',
    number: '07',
    title: 'Electricals',
    shortDesc: 'Powering your modern life.',
    fullDesc: 'Certified electrical infrastructure, concealed fire-retardant conduit wiring, balanced load distribution boards, smart lighting automation, and EV charger provisioning.',
    features: [
      'FRLS (Fire-Retardant Low Smoke) Multi-Strand Copper Wiring',
      '3-Phase MCB / RCCB Distribution Boards & Load Balancing',
      'Smart Home Scene Automation & Feather-Touch Switches',
      'Concealed Architectural Magnetic Track & Profile Lights',
      'Dedicated High-Amperage EV Charging & Inverter Points',
      'Earthing Resistance Testing & Surge Protection Setup'
    ],
    iconName: 'ElectricalLightning',
    badgeColor: '#BA223D',
    accentColor: '#EF4444',
    category: 'utilities',
    image: '/assets/services/service-07-electricals.jpg'
  },
  {
    id: 'tiles-marble-granite',
    number: '08',
    title: 'Tiles / Marble / Granite',
    shortDesc: 'Timeless surfaces. Lasting value.',
    fullDesc: 'Flawless zero-lip laying of Italian marble, large-format vitrified tiles, polished granite counter slabs, and epoxy anti-stain grouting for pristine, durable surfaces.',
    features: [
      'Imported Italian Marble Laying & Diamond Mirror Polishing',
      'Large Format Vitrified Slabs (1200x1800mm / 800x1600mm)',
      'Zero-Lip Precision Leveling Clips & Polymer Adhesives',
      'Kitchen Countertop Granite Bullnosing & Edge Chamfering',
      'Waterproof Epoxy Tile Grouting with Anti-Stain Protection',
      'Laser-Guided Gradient Slope Alignment in Bathrooms & Balconies'
    ],
    iconName: 'TilesDiamond',
    badgeColor: '#3D4A5A',
    accentColor: '#64748B',
    category: 'interiors',
    image: '/assets/services/service-08-tiles.jpg'
  }
];
