import { Lightning } from "phosphor-react";

export function Footer(){
    return (
        <footer className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
            <Lightning size={24}/> 
           <span className="ml-1">
               HR Systems Ltda - Desenvolvimento WEB
           </span>
        </footer>       
    )
}