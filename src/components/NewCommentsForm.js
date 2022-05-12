import React, {memo, useState} from "react";
import {patch} from "./fetch/fetchs"
import {useDispatch} from 'react-redux'
import {triggerUpdate} from './stores/update'
import {v4 as uuid} from 'uuid'


function NewCommentsForm ({memoryId, notesList}) {
    const [showNotes, setShowNotes] = useState(false)
    const [newNote, setNewNote] = useState('')
    const dispatch = useDispatch()

    const handleChangeShow = () => {
        setShowNotes(()=>!showNotes)
    }
    const handleOnNoteChange = (e) => {
        setNewNote(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(patch(memoryId, [...notesList, newNote])){
            dispatch(triggerUpdate())
        }else{
            console.log('Error posting note')
        }
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit} style={{marginBottom : '20px'}}>
                <input placeholder="Add a note..." value={newNote} onChange={handleOnNoteChange}/>
                <button>Send</button>
            </form>
            <button onClick={handleChangeShow}>Show Notes</button>
            {showNotes? notesList.map(note => <p key={uuid()}>- {note}</p>) : <p>There is {notesList.length} notes</p>}
        </div>
    )
}

export default NewCommentsForm;