
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MealsTab from "./MealsTab";
import useFood from "../../../Hooks/useFood";


const MealsCategory = () => {
    const[tabIndex,setTabIndex] = useState(0)
    const[foodItem] =useFood()
   
    const breakFast=foodItem.filter(item=>item.title==='Breakfast')
    const lunch=foodItem.filter(item=>item.title==='Lunch')
    const dinner=foodItem.filter(item=>item.title==='Dinner')
   

   
   
    return (
        <div>
            <p className=" mt-6 text-4xl text-white bg-blue-400 rounded-full text-center">Meals Category</p>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className=" flex gap-5 justify-center mt-10 items-center mb-5">
                    <Tab>BreakFast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                   
                </TabList>
                <TabPanel>
                   <MealsTab items={breakFast} ></MealsTab>
                </TabPanel>
                <TabPanel>
                <MealsTab items={lunch} ></MealsTab>
                </TabPanel>
                <TabPanel>
                <MealsTab items={dinner} ></MealsTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default MealsCategory;