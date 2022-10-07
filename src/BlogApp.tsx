
import { Routes, Route, Link } from "react-router-dom";
import { AppRouter } from "./router";
import { TitleMenu } from "./views/TitleMenu";


export const BlogApp = () => {


  return (
    <>
     <TitleMenu/>
     <AppRouter/>
    </>
  );
};