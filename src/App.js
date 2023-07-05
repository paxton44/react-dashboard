import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/index";
import Contacts from "./scenes/contacts";
// import Bar from "./scenes";
// import Pie from "./scenes";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
// import Line from "./scenes";
// import FAQ from "./scenes";
// import Calendar from "./scenes/calendar";
// import Geography from "./scenes";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (<ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
                <div className="app">
                  <Sidebar isSidebar={isSidebar} />
                  <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/contacts" element={<Contacts />} />
                      <Route path="/invoices" element={<Invoices />} />
                      <Route path="/form" element={<Form />} />
                      {/* <Route path="/calendar" element={<Calendar />} /> */}
                      {/* <Route path="/" element={<FAQ />} /> */}
                      {/* <Route path="/" element={<Bar />} /> */}
                      {/* <Route path="/" element={<Pie />} /> */}
                      {/* <Route path="/" element={<Line />} /> */}
                      {/* <Route path="/" element={<Geography />} /> */}
                    </Routes>
                  </main>                  
                </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
  );
}

export default App;
