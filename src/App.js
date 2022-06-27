import './App.css';
import Homepage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { makeStyles } from '@mui/styles';
import Alert from "./components/Alert";

const useStyles = makeStyles({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

