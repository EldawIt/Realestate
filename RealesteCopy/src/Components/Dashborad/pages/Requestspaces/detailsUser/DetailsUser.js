"use client";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { supabase } from "@/Components/supabase/supabaseClient";
function DetailsUser({ params }) {
  let [items, setItems] = useState([]);

  const updateverfied = async (id, verfied) => {
    const { error, data } = await supabase
      .from("spaces")
      .update({ verfied: verfied })
      .eq("id", id);
  };
  const updateAdress = async (id, adress) => {
    const { error, data } = await supabase
      .from("spaces")
      .update({ adress: adress })
      .eq("id", id);
  };
  const updatePrice = async (id, price) => {
    const { error, data } = await supabase
      .from("spaces")
      .update({ price: price })
      .eq("id", id);
  };

  useEffect(() => {
    get();
  }, [items]);
  const get = async () => {
    try {
      const { data, error } = await supabase
        .from("spaces")
        .select("*")
        .eq("id", params);
      setItems(data);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow sx={{ width: "100%" }}>
              <TableCell align="right">اسم العميل</TableCell>
              <TableCell align="right">عنوان الارض</TableCell>
              <TableCell align="right"> رقم التليفون</TableCell>
              <TableCell align="right">السعر</TableCell>
              <TableCell align="right">الموافقه على الطلب</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    width: "100%",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {item.nameUser}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <textarea
                      rows="10"
                      type="text"
                      defaultValue={item.adress}
                      style={{ width: "200px", height: "200px" }}
                      onChange={(e) => {
                        let newData = e.target.value;
                        updateAdress(item.id, newData);
                      }}
                    ></textarea>
                  </TableCell>

                  <TableCell align="right">0{item.phone}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    <input
                      type="checkbox"
                      style={{ width: "100px" }}
                      defaultChecked={item.verfied}
                      onChange={(e) => {
                        let checkvalue = e.target.defaultChecked;
                        if (checkvalue === false) {
                          console.log("yes == false");
                          let newData = true;
                          updateverfied(item.id, newData);
                        }
                        if (checkvalue === true) {
                          console.log("yes == true");
                          let newData = false;
                          updateverfied(item.id, newData);
                        }
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>مراجعه الصور </h1>
      {items.map((item) => {
        return (
          <div>
            <p>{item.nameUser}</p>
            <div
              style={{
                width: "100%",
                height: "200px",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {item.imageUrl.map((image,index) => {
                return (
                  <img
                  key={index}
                    style={{ width: "200px", height: "200px" }}
                    src={image.src}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DetailsUser;
