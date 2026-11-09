import React from "react";
import Header from "../blog/header";
import Footer from "../blog/footer";
import { Outlet } from "react-router";

function CommonLayout(){
    return <div>
        <Header/>
            <Outlet/>
        <Footer/>
    </div>
}

export default CommonLayout;