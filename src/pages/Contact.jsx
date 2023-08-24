import {
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Table,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactImg from '../assets/Images/contact.jpg'

const Contact = () => {
  return (
    <div className="contact" style={{ backgroundImage: `url(${ContactImg})` }}>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": { fontWeight: "bold", mb: 2 },
          "@media (max-width:600px)": { ml: 2 },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae
          laudantium laboriosam vitae tempora magni, distinctio voluptatibus
          accusamus magnam molestias soluta repellat voluptates deserunt
          blanditiis dicta rem consectetur ad culpa.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": { width: "300px", m: 1, mb: 5 },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> +123-456-789
                  📞(Toll Free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <ContactMailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  help@myFoodies.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <ContactPhoneIcon sx={{ color: "green", pt: 1 }} />{" "}
                  help@myFoodies.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Contact;
