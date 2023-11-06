"use client";
import { Container, Grid } from "@mui/material";
import UserHeader from "./components/User/Header";
import Calendar from "./components/Calendar";
import { Form } from "./components/Form";
import { Event } from "@/types";
import { useState } from "react";

export default function Home() {
  const [events, setEvents] = useState<Array<Event>>([]);
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Grid>
        <UserHeader />
      </Grid>
      <Grid>
        {!open && <Calendar events={events} setOpen={setOpen} />}
        {open && <Form setEvents={setEvents} setOpen={setOpen} />}
      </Grid>
    </Container>
  );
}
