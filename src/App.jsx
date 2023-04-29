import React, { useEffect, useState } from "react";
import AnchorDrawer from "./component/AnchorDrawer";

import NavBar from "./component/NavBar";
import NewList from "./component/NewsList";
import SideDrawer from "./component/SideDrawer";
import fetchData from "./utils/NewsApi";


export default function App() {
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [temp, setTemp] = useState({});
  const [heading,SetHeading] = React.useState("Latest News")
  const newsData = async (value) => {
    const data = await fetchData(value);
    if (data != null) {
      setTemp(data);
    } else {
      console.log("No data ");
    }
  };

  useEffect(() => {
    newsData("");
  }, []);
  const handleNewsCategory = (value) => {
    newsData(value)

    console.log(value);
  };
  // testing push

  return (
    <div>
      <NavBar
        open={open}
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
        setOpen={setOpen}
      />
      <AnchorDrawer
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
        handleNewsCategory={handleNewsCategory}
        
        SetHeading={SetHeading}
      />

      <SideDrawer
        open={open}
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
        handleNewsCategory={handleNewsCategory}
        SetHeading={SetHeading}
      />
      <NewList newsData={temp} open={open} setOpen={setOpen} heading={heading} />
    </div>
  );
}
