import React from 'react'
import { useTheme } from "@mui/material";
import {Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const {
        palette: {netural},
    } = useTheme();
  return (
    <Box mt
     ="70px" p="40px 0" backgroundColor={netural.light}>
        <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="30px"
            columnGap="clamp(20px, 30px ,40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography variant='h4'
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>
                </Box>
            </Box>
    </Box>
  )
}

export default Footer