import Home from "./components/Home";
import SiteProvider from "./components/context/SiteContext";
import AuthProvider from "./components/context/AuthContext";
function App() {

    return (
        <>
            <SiteProvider>
                <AuthProvider>
                   <Home/>
                </AuthProvider>
            </SiteProvider>
        </>
  );
}

export default App;
