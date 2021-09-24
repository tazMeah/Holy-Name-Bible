import React, { ReactNode } from "react";
import Bible from "../services/Bible";

export const BibleScriptures  = React.createContext(Bible);

export default function ScriptureProvider({children}: {children: ReactNode}) {
    return (<BibleScriptures.Provider value={Bible}>
        {children}
    </BibleScriptures.Provider>)
}