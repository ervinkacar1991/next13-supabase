"use client";
import { Container, Grid } from "@mui/material";
import UserHeader from "./components/User/Header";
import Calendar from "./components/Calendar";

export default function Home() {
  return (
    <Container>
      <Grid>
        <UserHeader />
      </Grid>
      <Grid>
        <Calendar />
      </Grid>
    </Container>
  );
}
