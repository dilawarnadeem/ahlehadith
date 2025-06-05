import React from 'react'
import Data from "@/const/jammattest"

interface NazryatProps {
    selectedName: string;
  }

const Nazryat = ({ selectedName }: any) => {
    const filteredData = Data?.filter(item => item.Name === selectedName);
    return (
        
    )
}

export default Nazryat