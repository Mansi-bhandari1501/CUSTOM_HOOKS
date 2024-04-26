'use client';
import { Button, Stack, Typography } from "@mui/material";
import useToggle from "../customHooks/useToggle"

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false)

  return (
    <Stack   gap={5}>
      <Typography sx={{margin:"50px"}} >{value.toString()}</Typography>
    <Stack  direction={'row'} gap={2}>
      <Button onClick={toggleValue}>Toggle</Button>
      <Button onClick={() => toggleValue(true)}>Make True</Button>
      <Button onClick={() => toggleValue(false)}>Make False</Button>
    </Stack>
    </Stack>
  )
}