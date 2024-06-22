"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import ModalForm from "./ModalForm";
import Link from "next/link";

// "1st & Goal", "TL320 Bingo" sub menu

/*
const settings = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Week 9",
  "Week 10",
  "Week 11",
  "Week 12",
  "Week 13",
  "Week 14",
  "Week 15",
  "Week 16",
  "Week 17",
  "Week 18",
  "Wild Card / Playoffs",
];
*/

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorWCEl, setAnchorWCEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    /*
    setOpen(true);
    handleCloseUserMenu();
    */
    window.open("https://forms.gle/gBwZSD5oNRhi28aw5", "_blank");
    handleCloseUserMenu();
  };
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    console.log("!");

    // redirect(page);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openWC = Boolean(anchorWCEl);
  const handleWCClick = (event) => {
    setAnchorWCEl(event.currentTarget);
  };
  const handleWCClose = () => {
    setAnchorWCEl(null);
  };

  const pages = [
    {
      id: 1,
      label: "Fantasy Football",
      link: "/playoff",
    },
    {
      id: 2,
      label: "1st & Goal",
      link: "",
    },
    {
      id: 3,
      label: "TL320 Bingo",
      link: "",
    },
  ];

  const settings = [
    { label: "Week 1", function: handleOpen },
    { label: "Week 2", function: handleOpen },
    { label: "Week 3", function: handleOpen },
    { label: "Week 4", function: handleOpen },
    { label: "Week 5", function: handleOpen },
    { label: "Week 6", function: handleOpen },
    { label: "Week 7", function: handleOpen },
    { label: "Week 8", function: handleOpen },
    { label: "Week 9", function: handleOpen },
    { label: "Week 10", function: handleOpen },
    { label: "Week 11", function: handleOpen },
    { label: "Week 12", function: handleOpen },
    { label: "Week 13", function: handleOpen },
    { label: "Week 14", function: handleOpen },
    { label: "Week 15", function: handleOpen },
    { label: "Week 17", function: handleOpen },
    { label: "Week 18", function: handleOpen },
    { label: "Week 19", function: handleOpen },
    { label: "Wild Card / Playoffs", function: handleOpen },
  ];

  return (
    <AppBar
      sx={{ backgroundColor: "#000000", borderBottom: "1px solid yellow" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "yellow" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.label} href={page.link}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.label} href={page.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "yellow", display: "block" }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 2, display: { md: "flex" } }}>
            <Image
              style={{
                margin: "5px 0",
              }}
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
              src="/img/theLeagueIcon.png"
              alt="me"
              width="125"
              height="125"
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open to select a week">
              <Button
                variant="outlined"
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  color: "yellow",
                  borderColor: "yellow",
                  padding: 1,
                  ":hover": {
                    borderColor: "yellow",
                  },
                }}
              >
                Select a Week
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={setting.function}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <ModalForm open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default Navbar;
