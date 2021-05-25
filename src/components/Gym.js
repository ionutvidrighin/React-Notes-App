import React, { useState, useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import firebase from 'firebase';
import dataBase from '../Firebase';

const Gym = ({weekday, month}) => {

    const [searchNote, setSearchNote] = useState("");
    const [newEntry, setNewEntry] = useState(false);
    const [newNote, setNewNote] = useState({
        id: "",
        solved: "",
        note: "",
        timestamp: ""
    })
    const [getNotes, setGetNotes] = useState([]);
    const [noteId, setNoteId] = useState("");
    const [noteSolved, setNoteSolved] = useState(false);
    const [deleteNote, setDeleteNote] = useState(false);

    //gets data from Firestore
    useEffect( () => {
        function getData() {
            dataBase.collection("Gym").orderBy('timestamp', 'desc').onSnapshot(item => 
                setGetNotes(item.docs.map(entry => ({
                    id: entry.id,
                    data: entry.data()
                }) ))
            )
        }
        getData();
    }, [newNote.solved])


    const NewNote = (e) => {
        e.preventDefault();
        if (newNote.note === "") {
            alert('empty');
            return
        }

        dataBase.collection("Gym").doc(`${Math.random() * 526}`).set({
            id: newNote.id,
            solved: newNote.solved,
            note: newNote.note,
            timestamp: newNote.timestamp
        })
        .then(() => {
            console.log("Document successfully written!");
            setNewNote({id: "", note: "", timestamp: ""});
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        }); 
    }

    return (
        <div className="gym">

            <div className="top-section">
                
                <h2>Gym</h2>
            </div>

            <div className="main-content">
                <span className="notes-sum">
                You currently have <span>{getNotes.length}</span> note<span className={getNotes.length <= 1 ? "hide" : ""}>s</span>
                </span>
                <input 
                    className="search" 
                    type="text" 
                    placeholder="Search..."
                    onChange={(e) => setSearchNote(e.target.value)}
                />

                {
                    getNotes.filter(value => {
                        if(searchNote === "") {
                            return value;
                        } else if (value.data.note.toLowerCase().includes(searchNote.toLowerCase())) {
                            return value;
                        } 
                    }).map(({data, id}) => (
                        <div className="notes" key={id}>
                            <div 
                                className="to-dos" 
                                onMouseOver={() => setNoteId(data.id)}
                            >
                                <FormControlLabel
                                    control={<Checkbox 
                                        checked={data.solved} 
                                        onChange={() =>                                             
                                            function(){
                                                dataBase.collection("Gym").doc(id).set({
                                                    id: data.id,
                                                    solved: noteSolved,
                                                    note: data.note,
                                                    timestamp: data.timestamp
                                                })
                                                .then(() => {
                                                    console.log("Note edited");
                                                    setNoteSolved(!noteSolved);
                                                })
                                                .catch((error) => {
                                                    console.error("Error writing document: ", error);
                                                });
                                            }()
                                        } 
                                        name="checkedA" />}
                                        label=""
                                />
                                <span className={`actual-to-do ${data.solved ? "line": ""}`}>
                                    {data.note}
                                </span>
                                <DeleteForeverIcon 
                                    id="delete"
                                    onClick={() => setDeleteNote(true)}
                                />
                                 <span className="date">
                                    <span> {weekday[new Date(data.timestamp?.toDate()).getDay()]}</span>
                                    <span> {new Date(data.timestamp?.toDate()).getDate()} </span>
                                    <span> {month[new Date(data.timestamp?.toDate()).getMonth()]} </span>
                                    <span> {new Date(data.timestamp?.toDate()).getFullYear()} </span>
                                </span>
                            </div>

                            <div className={`prompt-user ${ noteId === data.id && deleteNote ? "show-prompt" : ""}`}>

                                <p>Delete note ?</p> 

                                <span 
                                    id="yes" 
                                    onClick={() => function deleteNote(){
                                                dataBase.collection("Gym").doc(id).delete();
                                                setDeleteNote(false);
                                        }()} 
                                >
                                    Yes
                                </span>

                                <span id="no" onClick={() => setDeleteNote(false)}>No</span>
                            </div>

                        </div>
                    ))
                }

                <div className="new-todo" onClick={() => setNewEntry(true)}>
                    <AddCircleIcon /> New Entry
                </div>

                {
                    newEntry ? 
                    <div className="new-entry">
                        <form>
                            <input 
                                type="text" 
                                onChange={(e) => setNewNote({
                                    id: Math.floor(Math.random() * 15785),
                                    solved: false,
                                    note: e.target.value,
                                    timestamp: firebase.firestore.FieldValue.serverTimestamp()}
                                    )}
                                value={newNote.note}
                                placeholder="Add new to do..." 
                                />
                            <HighlightOffIcon id="exit" onClick={() => setNewEntry(false)}/>
                            <button 
                                type="submit"
                                onClick={NewNote}
                            >
                            </button>
                        </form>
                    </div> : ""
                }
            </div>
            
        </div>
    )
}

export default Gym;
