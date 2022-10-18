import React, { useState, useEffect } from "react";
import BarChart from "./Components/BarChart";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import NavBar from "./Components/Navbar";

function App() {
  const [charData, setChartData] = useState([]);
  const [category, setCategory] = useState("Food");
  const [product, setProduct] = useState("Cereal");
  const [brand, setBrand] = useState("Cereal1");
  const dataarr = {
    Food: {
      Cereal: {
        Cereal1: [
          { month: "January", sales: 200 },
          { month: "February", sales: 1000 },
          { month: "March", sales: 500 },
        ],
        Cereal2: [
          { month: "January", sales: 500 },
          { month: "February", sales: 100 },
          { month: "March", sales: 270 },
        ],
        Cereal3: [
          { month: "January", sales: 111 },
          { month: "February", sales: 500 },
          { month: "March", sales: 600 },
        ],
      },
      Meat: {
        Meat1: [
          { month: "January", sales: 555 },
          { month: "February", sales: 666 },
          { month: "March", sales: 777 },
        ],
        Meat2: [
          { month: "January", sales: 1000 },
          { month: "February", sales: 500 },
          { month: "March", sales: 270 },
        ],
        Meat3: [
          { month: "January", sales: 333 },
          { month: "February", sales: 255 },
          { month: "March", sales: 666 },
        ],
      },
    },
    Close: {
      Tshirt: {
        Tshirt1: [
          { month: "January", sales: 500 },
          { month: "February", sales: 200 },
          { month: "March", sales: 1000 },
        ],
        Tshirt2: [
          { month: "January", sales: 270 },
          { month: "February", sales: 500 },
          { month: "March", sales: 100 },
        ],
        Tshirt3: [
          { month: "January", sales: 600 },
          { month: "February", sales: 111 },
          { month: "March", sales: 500 },
        ],
      },
      Pant: {
        Pant1: [
          { month: "January", sales: 777 },
          { month: "February", sales: 555 },
          { month: "March", sales: 666 },
        ],
        Pant2: [
          { month: "January", sales: 270 },
          { month: "February", sales: 1000 },
          { month: "March", sales: 500 },
        ],
        Pant3: [
          { month: "January", sales: 666 },
          { month: "February", sales: 333 },
          { month: "March", sales: 255 },
        ],
      },
    },
  };
  useEffect(() => {
    setChartData(dataarr[category][product][brand]);
  }, [brand]);

  const changeCategory = (e) => {
    const cat = e.target.value;
    const defaultprod = Object.keys(dataarr[cat])[0];
    const defaultbrand = Object.keys(dataarr[cat][defaultprod])[0];
    setCategory(cat);
    setProduct(defaultprod);
    setBrand(defaultbrand);
  };
  const changeProduct = (e) => {
    const prod = e.target.value;
    const defaultbrand = Object.keys(dataarr[category][prod])[0];
    setProduct(prod);
    setBrand(defaultbrand);
  };
  const changeBrand = (e) => {
    const bra = e.target.value;

    setBrand(bra);
  };
  return (
    <div>
      <NavBar />
      <Box display="flex" justifyContent="space-between">
        <FormControl sx={{ marginLeft: "15%" }}>
          <InputLabel variant="standard" id="simple-select-label">
            Category
          </InputLabel>
          <Select value={category} onChange={changeCategory}>
            {Object.keys(dataarr)?.map((cat) => {
              return (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel variant="standard" id="simple-select-label">
            Product
          </InputLabel>
          <Select value={product} onChange={changeProduct}>
            {Object.keys(dataarr[category])?.map((prod) => {
              return (
                <MenuItem key={prod} value={prod}>
                  {prod}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: "15%" }}>
          <InputLabel variant="standard" id="simple-select-label">
            Brand
          </InputLabel>
          <Select value={brand} onChange={changeBrand}>
            {Object.keys(dataarr[category][product])?.map((br) => {
              return (
                <MenuItem key={br} value={br}>
                  {br}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <BarChart Data={charData} />
    </div>
  );
}

export default App;
