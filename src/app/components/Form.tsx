import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Event } from "@/types";

type Props = {
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Form({ setEvents, setOpen }: Props) {
  return <div>form</div>;
}
