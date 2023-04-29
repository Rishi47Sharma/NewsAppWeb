import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemButton from "@mui/material/ListItemButton";
import BusinessIcon from "@mui/icons-material/Business";
import MuiDrawer from "@mui/material/Drawer";
import ArticleIcon from "@mui/icons-material/Article";
import MovieIcon from "@mui/icons-material/Movie";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import { styled } from "@mui/material/styles";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export default function AnchorDrawer({ isDrawerOpen, setDrawerOpen , handleNewsCategory,
  SetHeading}) {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        sx={{ Color:" rgba(255, 255, 255, 0.2)",zIndex:"0"}}
        style={{backgroundColor:"rgba(255, 255, 255, 0.2)"}}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerHeader />

        <List style={{ width: "200px", marginTop: "50px", gap: "100px" }}>
        <ListItem
              disablePadding
              onClick={() => {
                handleNewsCategory("business");
                SetHeading("Business News")
                setDrawerOpen(false)
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
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
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
           
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("health");
                  SetHeading("Health News")
                  setDrawerOpen(false)
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
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("science");
                  SetHeading("Science News")
                  setDrawerOpen(false)
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
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("sports");
                  SetHeading("sports News")
                  setDrawerOpen(false)
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
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("technology");
                  SetHeading("Technology News")
                  setDrawerOpen(false)
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
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  handleNewsCategory("entertainment");
                  SetHeading("Movie News")
                  setDrawerOpen(false)
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
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
