import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { MyPagination } from './MyPagination'

export const PageLayout = ({ title, children, page, setPage }) => {
    return (
        <Container maxWidth={false} sx={{
            background: "linear-gradient(to top, #941B0C, #4E0110)",
            color: "whitesmoke", minHeight: "100vh"
        }}>
            <Typography variant='h3' sx={{ textTransform: "uppercase", fontWeight: "bold", letterSpacing: 2, textAlign: "center",background:"linear-gradient(to right, #330600ff, #ff0336ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                {title}
            </Typography>
            <Box>
                {children}
            </Box>
            <Box display="flex" justifyContent="center" sx={{paddingBottom:""}}>
            <MyPagination page={page} setPage={setPage}/>
            </Box>
        </Container>
    )
}