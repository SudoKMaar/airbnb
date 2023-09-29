import {
  GiBarn,
  GiBoatFishing,
  GiCastle,
  GiCaveEntrance,
  GiFamilyHouse,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiWoodCabin,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdApartment } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "@/components/categoryBox";
import BedBreakfast from "@/components/catgories/bed-breakfast";
import CasaParticular from "@/components/catgories/casa-particular";
import Yurt from "@/components/catgories/yurt";
import Trullo from "@/components/catgories/trullo";
import TreeHouse from "@/components/catgories/tree-house";
import Tower from "@/components/catgories/tower";
import TinyHome from "@/components/catgories/tiny-home";
import Tent from "@/components/catgories/tent";
import ShepherdHut from "@/components/catgories/shepherd-hut";
import Ryokan from "@/components/catgories/ryokan";
import Riad from "@/components/catgories/riad";
import Minsu from "@/components/catgories/minsu";
import Kezhan from "@/components/catgories/kezhan";
import Houseboat from "@/components/catgories/houseboat";
import Hotel from "@/components/catgories/hotel";
import GuestHouse from "@/components/catgories/guest-house";
import Farm from "@/components/catgories/farm";
import EarthHome from "@/components/catgories/earth-home";
import Dome from "@/components/catgories/dome";
import Dammuso from "@/components/catgories/dammuso";
import CycladicHome from "@/components/catgories/cycladic-home";
import CatContainer from "@/components/catgories/container";
import Container from "@/components/container";

export const categories = [
  {
    label: "House",
    icon: GiFamilyHouse,
    description:
      "A spacious and comfortable house, perfect for a family vacation.",
  },
  {
    label: "Flat/apartment",
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
    label: "Bed & breakfast",
    icon: <BedBreakfast />,
    description:
      "A cozy bed and breakfast, where you can enjoy a delicious breakfast each morning.",
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
    label: "Campervan/motorhome",
    icon: GiForestCamp,
    description: "A campervan or motorhome, perfect for a road trip.",
  },
  {
    label: "Casa particular",
    icon: <CasaParticular />,
    description:
      "A homestay in Cuba, where you can experience the local culture.",
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
    icon: <CatContainer />,
    description:
      "A stay in a converted shipping container, for a modern and unique experience.",
  },
  {
    label: "Cycladic home",
    icon: <CycladicHome />,
    description:
      "A whitewashed Cycladic home, perfect for a Greek island getaway.",
  },
  {
    label: "Dammuso",
    icon: <Dammuso />,
    description:
      "A traditional Sicilian dammuso, perfect for a relaxing stay in the sun.",
  },
  {
    label: "Dome",
    icon: <Dome />,
    description: "A geodesic dome, for a unique and stylish stay.",
  },
  {
    label: "Earth home",
    icon: <EarthHome />,
    description:
      "A sustainable earth home, perfect for an eco-friendly getaway.",
  },
  {
    label: "Farm",
    icon: <Farm />,
    description:
      "A stay on a working farm, where you can experience rural life.",
  },
  {
    label: "Guest house",
    icon: <GuestHouse />,
    description: "A cozy guest house, perfect for a relaxing stay.",
  },
  {
    label: "Hotel",
    icon: <Hotel />,
    description: "A luxurious hotel, perfect for a pampering stay.",
  },
  {
    label: "Houseboat",
    icon: <Houseboat />,
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
    label: "Kezhan",
    icon: <Kezhan />,
    description:
      "A traditional Chinese courtyard house, perfect for a cultural experience.",
  },
  {
    label: "Minsu",
    icon: <Minsu />,
    description:
      "A traditional Taiwanese homestay, perfect for a relaxing stay.",
  },
  {
    label: "Riad",
    icon: <Riad />,
    description:
      "A traditional Moroccan riad, perfect for a stylish and luxurious stay.",
  },
  {
    label: "Ryokan",
    icon: <Ryokan />,
    description:
      "A traditional Japanese ryokan, perfect for a cultural experience.",
  },
  {
    label: "Shepherd's hut",
    icon: <ShepherdHut />,
    description: "A cozy shepherd's hut, perfect for a romantic getaway.",
  },
  {
    label: "Tent",
    icon: <Tent />,
    description:
      "A camping experience, perfect for those who love the outdoors.",
  },
  {
    label: "Tiny home",
    icon: <TinyHome />,
    description:
      "A small but perfectly formed dwelling, perfect for minimalist travelers.",
  },
  {
    label: "Tower",
    icon: <Tower />,
    description: "A unique and unforgettable stay in a towering structure.",
  },
  {
    label: "Tree house",
    icon: <TreeHouse />,
    description:
      "A childhood dream come true, a cozy stay nestled among the branches.",
  },
  {
    label: "Trullo",
    icon: <Trullo />,
    description:
      "A traditional conical stone house, unique to the Puglia region of Italy.",
  },
  {
    label: "Windmill",
    icon: GiWindmill,
    description:
      "A charming and historic stay, with stunning views from the top.",
  },
  {
    label: "Yurt",
    icon: <Yurt />,
    description:
      "A traditional Mongolian dwelling, perfect for a glamping experience.",
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
