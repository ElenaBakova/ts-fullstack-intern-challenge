import {Routes, Route} from "react-router-dom"

import Cats from "../Cats/Cats.tsx";
import Favourites from "../Favourites/Favourites.tsx";

const Main = () => {
    return (
        <div className={"main"}>
            <Routes>
                <Route path="/cats" element={<Cats/>}/>
                <Route path="/favourites" element={<Favourites/>}/>
            </Routes>
        </div>
    );
};

export default Main;