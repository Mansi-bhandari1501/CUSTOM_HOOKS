'use client'
import useDarkMode from '../customHooks/useDarkMode'
import React from 'react'
import ToggleComponent from "@/components/toggleComponent";
import useFetch from "@/customHooks/useFetch";
import useTimeout from "@/customHooks/useTimeout";
// import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";

export default function Home() {
  // useTimeout(()=>{
  //   console.log("Hello after 2sec")
  // },2000)
  const { theme, toggleTheme } = useDarkMode()
  const data = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
  console.log(data)
  return (
    <div
    style={{
      height:"100vh",
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
    }}
    >
      <Button sx={{backgroundColor:"wheat"}} onClick={toggleTheme}>
        Switch theme
      </Button>
      <Stack marginTop={"10px"}>
       <Typography>Toggle</Typography>
        <ToggleComponent/>
      </Stack>
    </div>
  );
}



