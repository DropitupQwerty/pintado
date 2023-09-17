import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { ArtRequest } from 'pages/AdminPage/ManageArts/ArtRequest'
import React from 'react'

const tabsData = [
    {
        label: 'Art Posted',
        value: 'artPosted',
        component: <>Hello</>
    },
    {
        label: 'Art Request',
        value: 'artRequest',
        component: <ArtRequest/>
    },

] 

export const ManageArts = () => {
    return (
        <div>
            <Tabs value={tabsData[0].value}>
                <TabsHeader>
                    {tabsData.map((tab , index) => 
                        <Tab key={index} value={tab.value}>{tab.label}</Tab>) }
                </TabsHeader>
                <TabsBody>
                    {tabsData.map((tab,index)=>
                        <TabPanel key={index} value={tab.value}>
                            {tab.component}
                        </TabPanel>
                    )

                    }
                </TabsBody>

            </Tabs>






        </div>
    )
}
