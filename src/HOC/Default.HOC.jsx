import React from "react";
import {Route} from "react-router-dom";
//Layout
import DefaultLayout from "../layouts/Default.layout";
const DefaultHOC = ({component:Component,...rest})=>{
    //const Component=component;
    //Components
    //path
    //exact
    //react fragments (<></>)
    return (
    <>
    <Route {...rest} component={(props)=>(<DefaultLayout>
        <Component {...props}/>
    </DefaultLayout>)}
    />
    </>
    );
};

export default DefaultHOC;

// const yas={
//     name:"Yas",
//     age:20,
// };

//const student = pavan;

//student.goodStudent=false;

//Spread operator
//const student ={...yas,goodstudent:true};