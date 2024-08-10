import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Expense from "../pages/Expense";
import DashBoard from "../pages/DashBoard";


export default function Navigation() {
    return(
        <Layout>
            <Routes>
                <Route path="/dashboard" element={<DashBoard />}></Route>
                <Route path="/survey" element={<Expense />}/>
            </Routes>
        </Layout>
    )
}