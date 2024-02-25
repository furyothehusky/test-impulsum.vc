import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return <div className="app-container">
        <div className="content">
            {children}
        </div>
    </div>
}