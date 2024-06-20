"use client";
import { useState } from "react";
import "./DetailsForUser.css";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Box, Button, FormControl, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { supabase } from "@/Components/supabase/supabaseClient";
import Swal from "sweetalert2";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/firebase";

import axios from "axios";
function DetailsForUser() {
  const [adress, setAdress] = useState("");
  const [rooms, setRooms] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [bathRooms, setBathRooms] = useState("");
  const [phone, setPhone] = useState();
  const [price, setPrice] = useState("");
  const [TypeDepartment, setTypeDepartment] = useState("");
  /// sent to database

  // return according department or shops or spaces
  const [Typees, setTypes] = useState("");
  /////////////

  /////////////////////////////////////////////////// chose this ايجار || تمليك
  const [selected, setSelected] = useState("");
  /////////////////////////////////////////////////
  const [showLoding, setShowLoading] = useState(false); /// sweeet alert
  const [user, loading, error] = useAuthState(auth);
  /// store image and functions
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [valueInput, setValueInput] = useState("");

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
          if(Typees === "department"){
            const { data, error } = await supabase.from("department").insert({
              adress: adress,
              price: Number(price),
              rooms: Number(rooms),
              kitchen: Number(kitchen),
              bathRooms: Number(bathRooms),
              phone: Number(phone),
              verfied: false,
              imageUrl: imageUrlsFromcloudinary,
              nameUser: localStorage.getItem("name"),
              TypeDepartment: selected,
            });
          }
          if(Typees === "shops"){
            const { data, error } = await supabase.from("shops").insert({
              adress: adress,
              price: Number(price),
              rooms: Number(rooms),
              kitchen: Number(kitchen),
              bathRooms: Number(bathRooms),
              phone: Number(phone),
              verfied: false,
              imageUrl: imageUrlsFromcloudinary,
              nameUser: localStorage.getItem("name"),
              TypeDepartment: selected,
            });
          }
          if(Typees === "spaces"){
            const { data, error } = await supabase.from("spaces").insert({
              adress: adress,
              price: Number(price),
              phone: Number(phone),
              verfied: false,
              imageUrl: imageUrlsFromcloudinary,
              nameUser: localStorage.getItem("name"),
               
            });
          }
          Swal.fire({
            icon: "success",
            title: "تم ارسال بنجاح",
            text: "سنقوم بالتواصل معك في اقرب وقت",
          });
          console.log("done..........");

          // const { data, error } = await supabase.from(Typees).insert({
          //   adress: adress,
          //   price: Number(price),
          //   rooms: Number(rooms),
          //   kitchen: Number(kitchen),
          //   bathRooms: Number(bathRooms),
          //   phone: Number(phone),
          //   verfied: false,
          //   imageUrl: imageUrlsFromcloudinary,
          //   nameUser: localStorage.getItem("name"),
          //   TypeDepartment:selected
          // });
        } catch (error) {
          alert(error.message);
          console.log(error.message);
        }
      });
  };

  const handleChange = (event) => {
    setTypes(event.target.value);
  };

  if (!user) {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            color: "red",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "100px",
          }}
        >
          <Link href="/Login" style={{ color: "blue", fontWeight: "bold" }}>
            Sigin in
          </Link>
          تسجيل الدخول اولا لكي تتمكن من نشر الاعلان{" "}
        </h1>
      </>
    );
  }
  if (loading) {
    return <h1>loading.....</h1>;
  }
  if (user) {
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
          <form onSubmit={handelButton} style={{marginTop:"100px",width:"50%",textAlign:"center"}}>  
            <label>حدد نوع العقار</label>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                نوع العقار
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={Typees}
                label="Typees"
                onChange={handleChange}
                required
              >
                <MenuItem value={"department"}>شقه</MenuItem>
                <MenuItem value={"shops"}>محلات</MenuItem>
                <MenuItem value={"spaces"}>اراضي</MenuItem>
              </Select>
            </FormControl>
            <br />
            {Typees === "department" && (
              <>
                <label> عنوان الشقه + كام متر </label>
                <TextField
                  type="text"
                  required
                  onChange={(e) => setAdress(e.target.value)}
                />
                <label> سعر العقار</label>
                <TextField
                  type="number"
                  step="0.01"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label> عدد الغرف</label>
                <TextField
                  type="number"
                  required
                  onChange={(e) => setRooms(e.target.value)}
                />
                <label>عدد المطبخ</label>
                <TextField
                  type="number"
                  required
                  onChange={(e) => setKitchen(e.target.value)}
                />
                <label>عدد الحمامات</label>
                <TextField
                  type="number"
                  required
                  onChange={(e) => setBathRooms(e.target.value)}
                />
                <label>رقم الهاتف</label>
                <TextField
                  type="number"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <br />
                {/*  ايجار ولا تمليك  */}
                <FormControl required>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    <FormControlLabel
                      value="ايجار"
                      control={<Radio />}
                      label="ايجار"
                    />
                    <FormControlLabel
                      value="تمليك"
                      control={<Radio />}
                      label="تمليك"
                    />
                  </RadioGroup>
                </FormControl>

                {/*  ايجار ولا تمليك */}
                <label>ادخل صور</label>
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
              </>
            )}

            {Typees === "shops" && (
              <>
                <label>عنوان المحل + كام متر </label>
                <TextField
                  type="text"
                  required
                  onChange={(e) => setAdress(e.target.value)}
                />
                <label> سعر محل</label>
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
                {/*  ايجار ولا تمليك  */}
                <FormControl required>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    <FormControlLabel
                      value="ايجار"
                      control={<Radio />}
                      label="ايجار"
                    />
                    <FormControlLabel
                      value="تمليك"
                      control={<Radio />}
                      label="تمليك"
                    />
                  </RadioGroup>
                </FormControl>

                {/*  ايجار ولا تمليك */}
                <br />
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
              </>
            )}
            {Typees === "spaces" && (
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
              </>
            )}
            <br />
            <br />
            <br />
            {Typees && (
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
                ارسال
              </Button>
            )}
          </form>
        </Box>
      </Box>
    );
  }
}

export default DetailsForUser;
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
