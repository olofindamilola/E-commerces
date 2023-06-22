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
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni dolores repellat similique quaerat. Ab doloribus vero adipisci saepe. Commodi hic iusto repellendus rem soluta doloremque nobis alias aliquid qui eos? 
                    </div>
                </Box>
                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refund</Typography>
                </Box>
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography variant='h4'
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni dolores repellat similique quaerat. Ab doloribus vero adipisci saepe. Commodi hic iusto repellendus rem soluta doloremque nobis alias aliquid qui eos? 
                    </div>
                </Box>
            </Box>
    </Box>
  )
}

export default Footer