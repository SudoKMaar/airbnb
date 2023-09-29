import {
  GiBarn,
  GiBoatFishing,
  GiCampingTent,
  GiCastle,
  GiCaveEntrance,
  GiFamilyHouse,
  GiFarmTractor,
  GiForestCamp,
  GiHabitatDome,
  GiIsland,
  GiTreehouse,
  GiWatchtower,
  GiWindmill,
  GiWoodCabin,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { FaHotel } from "react-icons/fa";
import { MdApartment, MdHouseboat, MdLocalShipping } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "@/components/categoryBox";
import Container from "@/components/container";
import { BiSolidBuilding } from "react-icons/bi";

export const categories = [
  {
    label: "House",
    icon: GiFamilyHouse,
    description:
      "A spacious and comfortable house, perfect for a family vacation.",
  },
  {
    label: "Flat",
    icon: MdApartment,
    description:
      "A spacious and comfortable flat or apartment, perfect for a city break.",
  },
  {
    label: "Barn",
    icon: GiBarn,
    description: "A rustic barn conversion, perfect for a country getaway.",
  },
  {
    label: "Boat",
    icon: GiBoatFishing,
    description: "A unique boat stay, perfect for those who love the water.",
  },
  {
    label: "Cabin",
    icon: GiWoodCabin,
    description: "A cozy cabin in the woods, perfect for a relaxing escape.",
  },
  {
    label: "Campervan",
    icon: GiForestCamp,
    description: "A campervan or motorhome, perfect for a road trip.",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description: "A stay in a real castle, for a truly unique experience.",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "A cave stay, for a truly unique and adventurous experience.",
  },
  {
    label: "Container",
    icon: MdLocalShipping,
    description:
      "A stay in a converted shipping container, for a modern and unique experience.",
  },
  {
    label: "Dome",
    icon: GiHabitatDome,
    description: "A geodesic dome, for a unique and stylish stay.",
  },
  {
    label: "Farm",
    icon: GiFarmTractor,
    description:
      "A stay on a working farm, where you can experience rural life.",
  },
  {
    label: "Guest house",
    icon: BiSolidBuilding,
    description: "A cozy guest house, perfect for a relaxing stay.",
  },
  {
    label: "Hotel",
    icon: FaHotel,
    description: "A luxurious hotel, perfect for a pampering stay.",
  },
  {
    label: "Houseboat",
    icon: MdHouseboat,
    description:
      "A unique houseboat stay, perfect for those who love the water.",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
  {
    label: "Tent",
    icon: GiCampingTent,
    description:
      "A camping experience, perfect for those who love the outdoors.",
  },
  {
    label: "Tiny home",
    icon: FiHome,
    description:
      "A small but perfectly formed dwelling, perfect for minimalist travelers.",
  },
  {
    label: "Tower",
    icon: GiWatchtower,
    description: "A unique and unforgettable stay in a towering structure.",
  },
  {
    label: "Tree house",
    icon: GiTreehouse,
    description:
      "A childhood dream come true, a cozy stay nestled among the branches.",
  },
  {
    label: "Windmill",
    icon: GiWindmill,
    description:
      "A charming and historic stay, with stunning views from the top.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
