import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import HomePage from 'scenes/homePage'
import LogingPage from 'scenes/loginPage'
import ProfilePage from 'scenes/profilePage'
import { useMemo } from "react";
import { UseSelector, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
function App() {
  const mode=useSelector((state)=>state.mode);
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode])
  const isAuth=Boolean(useSelector((state)=>state.token))

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <Routes>
        <Route path="/" element={<LogingPage/>} />
        <Route path="/home" element={isAuth?<HomePage/>:<Navigate to="/"/>} />
        <Route path="/profile/:userId" element={isAuth?<ProfilePage/>:<Navigate to="/"/>} />
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
