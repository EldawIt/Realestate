import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./Services.css";
import { Fade } from "react-awesome-reveal";
export default function Card1() {
  const detials = [
    {
      src: "https://res.cloudinary.com/dpiie27st/image/upload/v1714899414/realstate/istockphoto-1397833533-612x612_fy0x7j.jpg",
      detail: "استشارات عقارية مجانية من خبراء متمرسين.",
    },
    {
      src: "https://res.cloudinary.com/dpiie27st/image/upload/v1714972302/realstate/istockphoto-1323845646-612x612_z5aaqp.jpg",
      detail: "دعم قانوني كامل لضمان سلامة استثمارك",
    },
    {
      src: "https://res.cloudinary.com/dpiie27st/image/upload/v1714972471/realstate/images_1_qd4sj4.jpg",
      detail: "خدمات متكاملة لتمويل شراء عقارك",
    },
    {
      src: "https://res.cloudinary.com/dpiie27st/image/upload/v1714972616/realstate/real-estate-agent-showing-house-for-sale_gsphjr.webp",
      detail: "تسهيلات ممتازة لامتلاك عقارك بسهولة.",
    },
    {
      src: "https://res.cloudinary.com/dpiie27st/image/upload/v1714972656/realstate/Mortgage-Redemption-Insurance-scaled_zhzspd.webp",
      detail: "خبرة واسعة في مجال الاستثمار العقاري.",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Fade direction="top-down">
    {detials.map((item, index) => {
return (
    <Card
      key={index}
      sx={{ maxWidth: 345, display: "flex", gap: "10px" }}
    >
      <Box>
        <img
          style={{ height: "140px" }}
          src={item.src}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.detail}
          </Typography>
        </CardContent>
      </Box>
    </Card>

);
})}
    </Fade>

  

    </Box>
  );
}
