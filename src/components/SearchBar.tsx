"use client"
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef } from "react";

const SearchBar = () => {
    

    return (
        <div className="relative w-full h-14 flex flex-col bg-white">            
            <div className="relative h-14 z-10 rounded-md">
                <Input className="absolute inset-0 h-full" />
                <Button className="absolute right-0 inset-y-0 h-full roundede-l-none"><Search className="searchBtn w-4 mr-2"/>Search</Button>
            </div>
        </div>
    )
}

export default SearchBar;