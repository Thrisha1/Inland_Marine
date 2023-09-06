"use client";
import FeaturedBoats from "@/components/designs/featuredboats";
import InteriorDesigns from "@/components/designs/InteriorDesigns";
import ContactUs from "@/components/designs/ContactUs";
import React from 'react';

export default function Design(){
    // const [val, setVal] = React.useState(0)
    // React.useEffect(() => {
    //     console.log(val)
    // }, [val])
    return(
        <div>
            {/* <button onClick={() => setVal(val => val+1)}>Click me</button> */}
            <FeaturedBoats />
            <InteriorDesigns />
            <ContactUs />
        </div>
    )
}