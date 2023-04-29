import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const linkStyle = {
  color: "inherit",
  textDecoration: "none",
};
export default function NewList({ open, newsData ,heading }) {
  const isSmallScreen = useMediaQuery("(min-width:900px)");
  const contentMargin = isSmallScreen ? (open ? "13rem" : "4rem") : "0rem";
  const renderNews = Object.entries(newsData).map((key, index) => {
    const publishedAt = key?.[1]?.publishedAt;
    const date = new Date(publishedAt).toLocaleDateString();
    return (
      <Grid item xs={12} sm={6} md={3}>
        <a
          style={linkStyle}
          target="_blank"
          rel="noreferrer"
          href={key?.[1]?.url}
        >
          <Card sx={{ maxWidth: 345 }} spacing={1}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={key?.[1]?.urlToImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom noWrap variant="h6" component="div">
                  {key?.[1]?.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    marginBottom: "15px",
                    overflow: "hidden",
                    height: { md: "100px", sm: "100px" },
                  }}
                >
                  {key?.[1]?.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="'overline" component="div">
                    {key?.[1]?.source?.name}
                  </Typography>
                  <Typography variant="'overline" component="div">
                    {date}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      </Grid>
    );
  });

  return (
    <Box ml={contentMargin}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box margin={3}>
          <Typography variant="h6">{heading}</Typography>
        </Box>

        <Box sx={{ flexGrow: "1" }}>
          <Grid container spacing={2} sx={{ padding: "0.5rem" }}>
            {renderNews}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
