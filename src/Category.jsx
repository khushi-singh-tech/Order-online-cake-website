import { TiThSmallOutline } from "react-icons/ti";
import { FaBirthdayCake } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi";
import { TbCakeRoll } from "react-icons/tb";
import { GiCakeSlice } from "react-icons/gi";
import { SiCakephp } from "react-icons/si";
import { TbCakeOff } from "react-icons/tb";

export const categories=[
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-pink-500"/>

    },
    {
        id: 2,
        name: "Birthday cakes",
        icon : <FaBirthdayCake className="w-[60px] h-[60px] text-pink-500"/>
    },
     {
        id: 3,
        name: "fusion cakes",
        icon : <HiOutlineCake className="w-[60px] h-[60px] text-pink-500"/>
    },
     {
        id: 4,
        name: "Bento cakes",
        icon : <TbCakeRoll className="w-[60px] h-[60px] text-pink-500"/>
    },
     {
        id: 5,
        name: "Designer cakes",
        icon : <GiCakeSlice className="w-[60px] h-[60px] text-pink-500"/>
    },
     {
        id: 6,
        name: "Vanilla cakes",
        icon : <SiCakephp className="w-[60px] h-[60px] text-pink-500"/>

    },
     {
        id: 7,
        name: "Pinata cakes",
        icon : <TbCakeOff className="w-[60px] h-[60px] text-pink-500"/>
    }

]
