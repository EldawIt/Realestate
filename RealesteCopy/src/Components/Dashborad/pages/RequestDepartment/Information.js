"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { supabase } from "@/Components/supabase/supabaseClient";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
function Information() {
  let [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const updateverfied = async (id, verfied) => {
    const { error, data } = await supabase
      .from("department")
      .update({ verfied: verfied })
      .eq("id", id);
  };
  useEffect(() => {
    get();
  }, [items]);
  const get = async () => {
    try {
      const { data, error } = await supabase.from("department").select("*");
      // setItems(data);
      items = data.filter((item) => {
        return item.nameUser.toLowerCase().includes(inputValue.toLowerCase());
      });
      setItems(items);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deletItems = async (item) => {
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase
      .from("department")
      .delete()
      .eq("id", item);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: "10px", outline: "cyan", border: "1px solid cyan" ,width:"90%"}}
        />
        <label>بحث</label>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">رقم العميل</TableCell>
              <TableCell align="right">اسم العميل</TableCell>
              <TableCell align="right">عرض التفاصيل</TableCell>
              <TableCell align="right">الموافقه على الطلب</TableCell>
              <TableCell align="right">مسح</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => {
              return (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    width: "100%",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.nameUser}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link
                      href={`/Dashboard/Requestdepartment/${item.id}`}
                      style={{
                        background: "#091E43",
                        color: "#fff",
                        padding: "10px",
                        textDecoration: "none",
                      }}
                    >
                      عرض المعلومات
                    </Link>
                  </TableCell>
                  <TableCell component="th" scope="row">
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
                  <TableCell component="th" scope="row">
                    <Button
                      onClick={() => deletItems(item.id)}
                      sx={{
                        background: "red",
                        color: "#FFF",
                        "&:hover": {
                          backgroundColor: "red",
                          color: "#fff",
                          border: "none",
                          outline: "none",
                        },
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                  
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Information;
