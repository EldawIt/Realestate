"use client";
import { useEffect, useState } from "react";
import "./DetailsForUser.css";
import { Box, Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { supabase } from "@/Components/supabase/supabaseClient";
import axios from "axios";
 
function SendToDatabase() {
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState();
  const [price, setPrice] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const checkInLocalStorageName = localStorage.getItem("name");
  const handleFileChangePhotos = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(Array.from(files)); // تحويل قائمة files إلى مصفوفة
    }
    setValueInput(event.target.files);
  };
  const handelButton = (e) => {
    e.preventDefault();
    const files = valueInput;
    if (!files) {
      return; // No files selected, exit the function
    }
    const uploadPromises = []; // Array to store upload promises
    let imageUrlsFromcloudinary = []; // array to stor the response

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "cbkv6xcd");
      uploadPromises.push(
        axios
          .post(
            "https://api.cloudinary.com/v1_1/dspm8uuuu/image/upload",
            formData
          )
          .then((response) => {
            console.log(response.data.url); // Log the URL of each uploaded image
            imageUrlsFromcloudinary.push({ src: response.data.url });
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          })
      );
    }

    Promise.all(uploadPromises)
      .then(() => {
        console.log("All images uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading some images:", error);
      })
      .finally(async () => {
        // Code to be executed regardless of success or failure
        try {
          const { data, error } = await supabase.from("spaces").insert({
            adress: adress,
            price: Number(price),
            phone: Number(phone),
            verfied: false,
            imageUrl: imageUrlsFromcloudinary,
            nameUser: localStorage.getItem("name"),
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
      });
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
        <form onSubmit={handelButton}>
       
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
                onChange={(e) => setPrice(e.target.value)}
              />
              <label>رقم الهاتف</label>
              <TextField
                type="number"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
                <input
                  required
                  type="file"
                  onChange={handleFileChangePhotos}
                  multiple
                />
                <ul
                  style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
                >
                  {selectedFiles.map((file) => (
                    <li key={file.name}>
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                    </li>
                  ))}
                </ul>
         
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
