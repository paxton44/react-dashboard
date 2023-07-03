// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { useState } from "react";
// import Team from "./scenes";
// import Contacts from "./scenes";
// import Bar from "./scenes";
// import Pie from "./scenes";
// import Invoices from "./scenes";
// import Form from "./scenes";
// import Line from "./scenes";
// import FAQ from "./scenes";
// import Calendar from "./scenes";
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
                      {/* <Route path="/" element={<Team />} /> */}
                      {/* <Route path="/" element={<Contacts />} /> */}
                      {/* <Route path="/" element={<Invoices />} /> */}
                      {/* <Route path="/" element={<Form />} /> */}
                      {/* <Route path="/" element={<Bar />} /> */}
                      {/* <Route path="/" element={<Pie />} /> */}
                      {/* <Route path="/" element={<Line />} /> */}
                      {/* <Route path="/" element={<FAQ />} /> */}
                      {/* <Route path="/" element={<Calendar />} /> */}
                      {/* <Route path="/" element={<Geography />} /> */}
                    </Routes>
                  </main>                  
                </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
  );
}

export default App;
