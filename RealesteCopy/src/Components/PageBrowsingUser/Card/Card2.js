import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button , Rating } from "@mui/material";

import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import "./Card2.css";
import CardImageExperment from "./CardImageExperment/CardImageExperment";
export default function Card2({ items }) {
  let Price = items.price.toLocaleString('ar-EG', {
    style: 'currency',
    currency: 'EGP', // Replace with your desired currency if needed
    maximumFractionDigits: 0, // Set to 0 to remove decimal places
  });
  return (
    
    <div>
      <Card className="card">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardImageExperment items={items}/>
          <CardContent
            sx={{
              height: "100%",
              width: { xl: "400px", md: "400px", xs: "450px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{
                  fontSize: { xl: "15px", md: "15px", xs: "13px" },
                  fontWeight: "bold",
                }}
              >
                {items.adress}
              </Typography>
              <Typography
                variant="p"
                color="text.secondary"
                sx={{
                  fontSize: { xl: "15px", md: "15px", xs: "13px" },
                  fontWeight: "bold",
                }}
              >
                السعر {Price}
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" color="text.secondary">
                <Rating
                  name="read-only"
                  value={4.25}
                  readOnly
                  sx={{ color: "#091E43" }}
                />
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#091E43",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#091E43",
                    color: "#fff",
                    border: "none",
                    outline: "none",
                  },
                  display: {xl:"flex",md:"flex",xs:"none"},
                  outline: "none",
                  border: "none",
                }}
              >
                تواصل معانا لي معرفه التفاصيل
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: { xl: "220px", md: "220px", xs: "120px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  position: { xs: "relative" },
                }}
              >
                {items.rooms > 0 ? (
                  <>
                    <Box className="child-icons">
                      <BedIcon /> 
                    </Box>
                    <Box className="child-icons"> {items.rooms} غرفه</Box>
                  </>
                ) : (
                  ""
                )}
                {items.kitchen ? (
                  <>
                    <Box className="child-icons">
                      {" "}
                      <KitchenIcon />{" "}
                    </Box>
                    <Box className="child-icons"> {items.kitchen} مطبخ</Box>
                  </>
                ) : (
                  ""
                )}
                {items.bathRooms ? (
                  <>
                    <Box className="child-icons">
                      {" "}
                      <BathtubIcon />{" "}
                    </Box>
                    <Box className="child-icons"> {items.bathRooms} حمام</Box>
                  </>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
