import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@material-ui/core"

export function Header() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
                Material-UI
            </Link>
            <Link color="inherit" href="/getting-started/installation/">
                Core
            </Link>
            <Typography color="textPrimary">
                Breadcrumb
            </Typography>
        </Breadcrumbs>
    )
}