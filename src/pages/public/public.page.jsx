import { Outlet } from "react-router-dom"
import PublicHeader from "../headers/public.header"

const PublicPage = () => {
    return (
        <main className="w-full h-full flex flex-col">
            <PublicHeader />
            <Outlet />
        </main>
    )
}

export default PublicPage