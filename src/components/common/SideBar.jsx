import React, { useState } from 'react'
import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
	},
	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true)
   
  return (
    <motion.div className={`relative max-sm: z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isOpen? 'w-52': 'w-20'}`} animate={{width:isOpen?250:80}}>
        <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
            <motion.button
            
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            onClick={()=>setIsOpen(!isOpen)}
            className='p-2 rounded-full max-sm:hidden hover:bg-gray-700 transition-colors max-w-full'
            >
                <Menu size={24}/>
            </motion.button>
            <motion.button
            
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            
            className='p-2 rounded-full sm:hidden hover:bg-gray-700 transition-colors max-w-full'
            >
                <Menu size={24}/>
            </motion.button>
            <motion.nav>
                {
                    SIDEBAR_ITEMS.map((items, index)=>(
                        <Link key={items.href} to={items.href}>
                            <motion.div className=' flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors'>
                                <items.icon size={20} style={{color:items.color, minWidth:"20px"}}/>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.span className=' ml-4 whitespace-nowrap'
                                        initial={{opacity:0, width:0}}
                                        animate={{opacity:1, width:"auto"}}
                                        exit={{opacity:0, width:0}}
                                        transition={{duration:0.2, delay:0.3}}
                                        >
                                            {items.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        
                        </Link>
                    ))
                }
            </motion.nav>

        </div>

    </motion.div>
  )
}

export default SideBar