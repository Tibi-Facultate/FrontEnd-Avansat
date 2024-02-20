import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import LogoutPage from "./pages/LogoutPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Layout/Footer/Footer";
import PageContainer from "./components/Layout/PageContainer/PageContainer";
import PageContent from "./components/Layout/PageContent/PageContent";
import Nav from "./components/Layout/Nav/Nav";
import {useDispatch} from "react-redux";
import {logout, setIsAuthenticated} from "./store/auth.reducer";
import {auth} from "./lib/firebase";
import {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";

const router = createBrowserRouter(
    createRoutesFromElements(
       <>
            <Route>
                <Route path="/" element={<HomePage />} />
                <Route element={<ProtectedRoute needLogin = {false} redirectTo="/"/>}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<ProtectedRoute needLogin = {false} redirectTo="/"/>}>
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route element={<ProtectedRoute needLogin = {true} redirectTo="/"/>}>
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route element={<ProtectedRoute needLogin = {true} redirectTo="/"/>}>
                    <Route path="/logout" element={<LogoutPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </>
    )
);

function App() {
    const dispatch = useDispatch();
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const pagina = capitalizeFirstLetter(window.location.pathname.split("/").pop());
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setIsAuthenticated());
            } else {
                dispatch(logout());
            }
        });
        return () => {
            unsubscribe();
        };
    }, [dispatch]);


    return (

        <PageContainer isFixedNav>
            <Nav/>
            <PageContent title={pagina !== "" ? (pagina + " Page") : "Homepage"}>
             <RouterProvider router={router} />

            </PageContent>
            <Footer />
        </PageContainer>
    );
}

export default App;
