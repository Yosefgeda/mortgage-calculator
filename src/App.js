import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 3000,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container width="xl" sx={{mt: 4}}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setdata={setData}/>
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
