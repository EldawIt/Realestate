import "./Categorey.css";
import Card2 from "../Card/Card2";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { supabase } from "@/Components/supabase/supabaseClient";
function Category() {
  const buttontTitle = [
    { name: "اراضي", path: "spaces" },
    { name: "محلات", path: "shops" },
    { name: "شقق", path: "department" },
  ];
  let [items, setItems] = useState([]);
  const [valueButtons, setvalueButtons] = useState("department");
  const [selected, setSelected] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [notFound, setNotfound] = useState("");

  // useEffect(() => {
  //   get();
  // }, [items]);
  useEffect(() => {
    get();
  }, [valueButtons, selected]);
  const get = async () => {
    try {
      const { data, loading, error } = await supabase
        .from(valueButtons)
        .select("*");
      if (valueButtons === "department" || valueButtons === "shops") {
        if (selected === "ايجار" || selected === "تمليك") {
          items = data.filter((item) => {
            return item.TypeDepartment.toLowerCase().includes(
              selected.toLowerCase()
            );
          });
          setIsloading(false);
          setItems(items);
        } else {
          setItems(data);
          setIsloading(false);
        }
      }
      if (valueButtons === "spaces") {
        setItems(data);
        setIsloading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {/* buttons */}
      <div style={{marginTop:"80px"}}>
        <div className="categorey">
          {buttontTitle.map((item, index) => {
            return (
              <ul key={index}>
                <li>
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
                      outline: "none",
                      border: "none",
                    }}
                    onClick={() => {
                      setvalueButtons(item.path);
                       
                    }}
                  >
                    {item.name}
                  </Button>
                </li>
              </ul>
            );
          })}

          {/* // chose ايجار || تمليك  */}
          {valueButtons === "shops" && (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                الكل
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={selected}
                label="ايجار"
                onChange={(e) => setSelected(e.target.value)}
              >
                <MenuItem value="">
                  <em>الكل</em>
                </MenuItem>
                <MenuItem value="ايجار">ايجار</MenuItem>
                <MenuItem value="تمليك">تمليك</MenuItem>
              </Select>
            </FormControl>
          )}
          {valueButtons === "department" && (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                الكل
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={selected}
                label="ايجار"
                onChange={(e) => setSelected(e.target.value)}
              >
                <MenuItem value="">
                  <em>الكل</em>
                </MenuItem>
                <MenuItem value="ايجار">ايجار</MenuItem>
                <MenuItem value="تمليك">تمليك</MenuItem>
              </Select>
            </FormControl>
          )}
        </div>
      </div>
      {items.length > 0 ?
        items.map((item) => {
          return (
            <div key={item.id}>{item.verfied &&  <Card2 items={item} /> }</div>
          );
        })
        :<p>جاري التحميل......</p>
      }

      {/* {items.map((item) => {
        return (
          <div key={item.id}>
            {item.verfied && <Card2 items={item} />}
          </div>
        );
      })} */}
      {/* {!items.length > 0 && <p>لا يوحد نتائج</p>}
      {isloading && <p>loading...</p>} */}
    </div>
  );
}

export default Category;
// {items.map((item) => {
//   return (

//     <div key={item.id}>

//     {item.verfied && <Card2 items={item} />}
//     </div>
//   );
// })}
// {!items.length > 0 && <p>لا يوحد نتائج</p>}
