"use client";
import { useEffect, useState } from "react";
import "./DetailsForUser.css";
import { Box, Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { supabase } from "@/Components/supabase/supabaseClient";
 
function SendToDatabase() {
  const [adress, setAdress] = useState("");
  const [rooms, setRooms] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [bathRooms, setBathRooms] = useState("");
  const [phone, setPhone] = useState();
  const [price, SetPrice] = useState("");
  const [Typees, setTypes] = useState("");
  const [showMessege, setShowMessege] = useState(false);

  const handleChange = (event) => {
    setTypes(event.target.value);
  };
  useEffect(() => {}, []);
  const checkInLocalStorageName = localStorage.getItem("name");
  const handleButton = async (e) => {
    e.preventDefault();
    if (!checkInLocalStorageName) {
      setShowMessege(true);
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "قم بتسجيل الدخول اولا!",
        footer: '<a href="/SignUp">Why do I have this issue?</a>',
      });
    } else {
      try {
        const { data, error } = await supabase.from("shops").insert({
          adress: adress,
          price: Number(price),
          rooms: Number(rooms),
          kitchen: Number(kitchen),
          bathRooms: Number(bathRooms),
          phone: Number(phone),
          verfied: false,
        });
        Swal.fire({
          icon: "success",
          title: "تم ارسال بنجاح",
          text: "سنقوم بالتواصل معك في اقرب وقت",
        });
        console.log("done..........");
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    }
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={handleButton}>
          <label>عنوان المحل + كام متر </label>
          <TextField
            type="text"
            required
            onChange={(e) => setAdress(e.target.value)}
          />
          <label> سعر المحل الارض</label>
          <TextField
            type="number"
            step="0.01"
            required
            onChange={(e) => SetPrice(e.target.value)}
          />
          <label>رقم الهاتف</label>
          <TextField
            type="number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* {Typees === "spaces" && (
            <>
              <label>عنوان الارض + كام متر </label>
              <TextField
                type="text"
                required
                onChange={(e) => setAdress(e.target.value)}
              />
              <label> سعر قطعه الارض</label>
              <TextField
                type="number"
                step="0.01"
                required
                onChange={(e) => SetPrice(e.target.value)}
              />
              <label>رقم الهاتف</label>
              <TextField
                type="number"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
          )}  */}
          <br />
          <br />
          <br />
          <Button
            sx={{
              backgroundColor: "#091E43",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#091E43",
                color: "#fff",
                border: "none",
                outline: "none",
              },
              outline: "none",
              border: "none",
              width: "100%",
            }}
            type="submit"
          >
            submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default SendToDatabase;
{
  /* <label>ادخل صور</label>
        <input type="file"  onChange={handleFileChange}   multiple />
        <ul>
  {selectedFiles.map((file) => (
    <li key={file.name}>
      <img src={URL.createObjectURL(file)} alt={file.name} />
    </li>
  ))}
</ul> */
}
// const handleFileChange = (event) => {
//   const files = event.target.files;
//   if (files && files.length > 0) {
//     setSelectedFiles(Array.from(files)); // تحويل قائمة files إلى مصفوفة
//   }
// };
// const handleChange = (event) => {
//   setSelectedValue(event.target.value);
// };
