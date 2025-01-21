import { createRoot } from "react-dom/client";
import "./css/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { MainLayout } from "./MainLayout/MainLayout";
createRoot(document.getElementById("root")).render(<MainLayout />);
