import "./footer.scss";
import { Box, Button, TextField } from "@mui/material";
import star from "./../../components/images/star.png";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="demo_image_one">
        <img src={star} alt="star" className="star" />
        {/* <img src={star} alt="star" className="star_two" /> */}
      </Box>
      <Box className="footer_text">
        <p className="footer_text_one">
          Subscribe and stay up to date with all our news
        </p>
        <p className="footer_text_two">
          That means you are willing to recieve emails about news about the
          latest work of art from us, so you can easily get and don't miss the
          news Subscribe for free at the end of the month there will be a give
          away in the form of an exhibition event voucher
        </p>
        <Box className="footer_input">
          <TextField
            sx={{
              "& label.Mui-focused": {
                color: "rgba(165, 42, 42, 1)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "green",
              },
            }}
            id="standard-basic"
            label="email"
            variant="standard"
          />
          <Button variant="contained" className="footer_subscribe_btn">
            Subscribe
          </Button>
        </Box>
      </Box>
      <Box className="demo_image_two">
        <img src={star} alt="star" className="star" />
        <img src={star} alt="star" className="star_two" />
      </Box>
    </Box>
  );
};

export default Footer;
