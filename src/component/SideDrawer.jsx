import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessIcon from "@mui/icons-material/Business";
import MuiDrawer from "@mui/material/Drawer";
import ArticleIcon from "@mui/icons-material/Article";
import MovieIcon from "@mui/icons-material/Movie";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
const array = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export default function SideDrawer({ open, handleNewsCategory,SetHeading }) {

  return (
    <Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader></DrawerHeader>
          <Divider />
          <List
            style={{
              maxWidth: "230px",

              marginTop: "20px",
            }}
          >
            <ListItem
              disablePadding
              onClick={() => {
                handleNewsCategory("business");
                SetHeading("Business News")
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}

                >
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Business"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
           
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("health");
                  SetHeading("Health News")
                }}
                
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <MedicalInformationIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Health"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("science");
                  SetHeading("Science News")
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <ScienceIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Science"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("sports");
                  SetHeading("sports News")
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <SportsCricketIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Sports"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("technology");
                  SetHeading("Technology News")
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <BiotechIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Technology"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("entertainment");
                  SetHeading("Movie News")
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Movies"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}
