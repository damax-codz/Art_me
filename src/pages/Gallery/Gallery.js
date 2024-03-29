import {
  Box,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import axios from "axios";
import "./gallery.scss";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import LoveIcon from "../../components/images/icons/heart.png";
import Footer from "../../components/footer/footer";
import MetaTags from "react-meta-tags";

const Gallery = () => {
  const [sort, setSort] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [painting, setPainting] = useState(false);
  const [loremone, setLoremOne] = useState(false);
  const [loremtwo, setLoremTwo] = useState(false);
  const [loremthree, setLoremThree] = useState(false);
  const [loremfour, setLoremFour] = useState(false);
  const [loremfive, setLoremFive] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState("All Pieces");
  const [mainCategory, setMainCategory] = useState("art");

  const [unsplashImages, setUnsplashImages] = useState([]);

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  const changeFilterStatus = () => {
    setOpenFilters(!openFilters);
  };

  const changeGalleryCollection = (event) => {
    setGalleryCategory(event.target.innerText);
    setMainCategory(event.target.innerText);
  };
  const changeSearch = (event) => {
    if (event.target.value === "") {
      setMainCategory("art");
    } else {
      setMainCategory(event.target.value);
    }
  };

  async function getImages() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${mainCategory}&count=22&client_id=g6gZZ_6ytLizxTOCGRUijH2d-aAJ0Yul2bWy7CUzTyo`
      );
      setUnsplashImages(response.data.results);
      // console.log(response.data.results);
    } catch (error) {
      // console.error(error);
    }
  }

  useEffect(() => {
    getImages();
  }, [mainCategory]);

  return (
    <>
      <MetaTags>
        <title>Gallery | Artme</title>
        <meta
          name="description"
          content="Check out some of today’s popular collections. "
        />
      </MetaTags>
      <Nav />
      <Box className="gallery_page">
        <Typography className="top_header">{galleryCategory}</Typography>
        <Typography className="top_header_sub">
          Check out some of today’s popular collections
        </Typography>

        <Box className="top_nav">
          <Box className="filters" onClick={changeFilterStatus}>
            Filters{" "}
            {openFilters ? (
              <ArrowBackIcon sx={{ fontSize: "17px" }} />
            ) : (
              <ArrowForwardIcon sx={{ fontSize: "17px" }} />
            )}
          </Box>
          <Box className="search">
            <FormControl variant="standard" className="search_input">
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                label="Search"
                onChange={changeSearch}
              />
            </FormControl>
            <FormControl
              variant="standard"
              sx={{
                minWidth: 120,
                "&.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input":
                  { padding: "4px 0 4px" },
              }}
              className="select_sort"
            >
              <InputLabel id="demo-simple-select-standard-label">
                Sort by
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sort}
                onChange={handleChangeSort}
                label="Sort"
              >
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Date">Date</MenuItem>
                <MenuItem value="Type">Type</MenuItem>
                <MenuItem value="collection">collection</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <hr />

        <Box className="gallery_display_page">
          <Box
            className="gallery_side_nav"
            sx={{
              width: {
                xs: openFilters ? "100%" : "0%",
                md: openFilters ? "30%" : "0%",
              },
              display: openFilters ? "flex" : "none",
            }}
          >
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemText
                  primary="All pieces"
                  onClick={changeGalleryCollection}
                />
              </ListItemButton>
              <hr />
              <ListItemButton onClick={() => setDrawing(!drawing)}>
                <ListItemText primary="Drawing" />
                {drawing ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={drawing} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary="Cartoon"
                      onClick={changeGalleryCollection}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary="Line drawing"
                      onClick={changeGalleryCollection}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary="Figure drawing"
                      onClick={changeGalleryCollection}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
              <hr />

              <ListItemButton onClick={() => setPainting(!painting)}>
                <ListItemText primary="Painting" />
                {painting ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={painting} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary="Abstract"
                      onClick={changeGalleryCollection}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary="Oil Painting"
                      onClick={changeGalleryCollection}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
              <hr />

              <ListItemButton onClick={() => setLoremOne(!loremone)}>
                <ListItemText primary="Lorem One" />
                {loremone ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={loremone} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="ipsum" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="dolor" />
                  </ListItemButton>
                </List>
              </Collapse>
              <hr />

              <ListItemButton onClick={() => setLoremTwo(!loremtwo)}>
                <ListItemText primary="Lorem two" />
                {loremtwo ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={loremtwo} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="ipsum" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="dolor" />
                  </ListItemButton>
                </List>
              </Collapse>
              <hr />

              <ListItemButton onClick={() => setLoremThree(!loremthree)}>
                <ListItemText primary="Lorem three" />
                {loremthree ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={loremthree} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="ipsum" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="dolor" />
                  </ListItemButton>
                </List>
              </Collapse>
              <hr />

              <ListItemButton onClick={() => setLoremFour(!loremfour)}>
                <ListItemText primary="Lorem four" />
                {loremfour ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={loremfour} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="ipsum" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="dolor" />
                  </ListItemButton>
                </List>
              </Collapse>
              <hr />

              <ListItemButton onClick={() => setLoremFive(!loremfive)}>
                <ListItemText primary="Lorem five" />
                {loremfive ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={loremfive} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="ipsum" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="dolor" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>

          <Box
            className="gallery_image_display"
            sx={{
              width: {
                xs: openFilters ? "0%" : "100%",
                md: openFilters ? "70%" : "100%",
              },
            }}
          >
            <Grid container className="image-grid" spacing={4}>
              {unsplashImages
                ? unsplashImages.map((item, index) => {
                    return (
                      <Grid
                        item
                        md={openFilters ? 4 : 3}
                        xs={12}
                        key={index}
                        className="grid_container"
                      >
                        <Box
                          component="img"
                          className="grid_image"
                          src={item.urls.full}
                          alt="art-images"
                        />

                        <Box className="grid_image_details">
                          <Box className="profile">
                            <Box
                              className="detail_profile"
                              component="img"
                              src={item.user.profile_image.small}
                              alt="profile"
                            />
                            <Typography className="detail_name">
                              {item.user.first_name} {item.user.last_name}
                            </Typography>
                          </Box>
                          <Box className="detail_likes">
                            {" "}
                            <Box
                              className="detail_love"
                              component="img"
                              src={LoveIcon}
                              sx={{ width: "15px", marginRight: "3px" }}
                              alt="like"
                            />
                            {item.likes}
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })
                : null}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Gallery;
