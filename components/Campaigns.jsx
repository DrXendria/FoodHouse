import React from 'react'
import Image from 'next/image'
import Title from './ui/Title'
import { FaShoppingCart } from "react-icons/fa";
const CampaignItem1 = ()=>{
    return (
        <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
            <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[5px]
             border-primary rounded-full overflow-hidden">
                <Image src="/images/o1.jpg"
                alt=""
                layout="fill"
                className="hover:scale-105 transition-all"
                priority
                />
                
            </div>
            <div className="text-white">
                <Title className="text-2xl"> Tasty Thursdays</Title>
                <div className="font-dancing my-1">
                    <span className="text-[40px]">20%</span>
                    <span className="text-sm inline-block ml-1">Off</span>
                </div>
                <button className="btn-primary flex items-center gap-x-2"><FaShoppingCart size={20}/> Order Now</button>
            </div>
        </div>
    )
}
const CampaignItem2 = ()=>{
    return (
        <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
            <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[5px]
             border-primary rounded-full overflow-hidden">
                <Image src="/images/o2.jpg"
                alt=""
                layout="fill"
                className="hover:scale-105 transition-all"
                />
                
            </div>
            <div className="text-white">
                <Title className="text-2xl"> Tasty Thursdays</Title>
                <div className="font-dancing my-1">
                    <span className="text-[40px]">20%</span>
                    <span className="text-sm inline-block ml-1">Off</span>
                </div>
                <button className="btn-primary flex items-center gap-x-2"><FaShoppingCart size={20}/> Order Now</button>
            </div>
        </div>
    )
}
const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
        <CampaignItem1/>
        <CampaignItem2/>

        
    </div>
  )
}

export default Campaigns