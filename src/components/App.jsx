import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import noteCard from "./NoteCard";

function App(){
    return(
    <div>
        <Header/>
        <Footer/>
        {notes.map(noteCard)}
    </div>);
}

export default App;