"use client";
import { Avatar, Grid, Button, Switch, FormControlLabel } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ switchTheme }: { switchTheme: any }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Grid sx={{ p: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent={pathname === "/" ? "center" : "space-between"}
        alignItems="center"
      >
        <Grid item lg={6}>
          <p>logo</p>
        </Grid>
        <Grid
          xs={6}
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <FormControlLabel
            control={
              <Switch onChange={switchTheme} name="gilad" color="primary" />
            }
            label="Night mode"
          />
          <Avatar
            className="pointer"
            onClick={() => router.push("/profile")}
            sx={{ width: 56, height: 56, backgroundColor: "#1F6FFF" }}
          >
            G
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
}
