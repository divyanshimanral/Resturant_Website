import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1a1a19", color: "white", p: 2 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "50px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons  */}
          <YouTubeIcon />
          <GitHubIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          All Right Reserved &copy; foodies.com
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
