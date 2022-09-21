import { Routes, Route, Navigate } from 'react-router-dom'
import InvalidPage from "../pages/redirects/invalid.page"
import HomePage from "../pages/public/home.page"
import PublicPage from "../pages/public/public.page"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="public" element={<PublicPage />}>
                <Route index element={<HomePage />} />
            </Route>
            <Route index element={<Navigate to="public" />} />
            <Route path="*" element={<InvalidPage />} />
        </Routes>
    )
}

export default MainRoutes