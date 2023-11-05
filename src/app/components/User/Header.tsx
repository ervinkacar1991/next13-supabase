"use client";

import { Avatar, Grid, Button } from "@mui/material";

export default function UserHeader() {
  return (
    <Grid sx={{ my: 6 }} container alignItems="center">
      <Grid item sx={{ mr: 4 }}>
        <Avatar sx={{ width: 115, height: 115, backgroundColor: "#1F6FFF" }}>
          H
        </Avatar>
      </Grid>
      <Grid item>
        <h1>Ervin Kacar</h1>
        <p style={{ marginBottom: "12px", color: "gray" }}>
          kacarervin@gmail.com
        </p>
      </Grid>
    </Grid>
  );
}
