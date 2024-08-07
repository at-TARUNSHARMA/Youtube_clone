import { SearchBar } from "./SearchBar"
export const AppBar = () => {
    return <div className="flex justify-between pt-3 p-3">
        <div className="text-md inline-flex item-center pb-2">
            YouTube
        </div>
        <div>
            <SearchBar></SearchBar>
        </div>
        <div>
            Sign in
        </div>
    </div>
}