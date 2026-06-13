import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const NoteCard = ({note,setNotes}) => {
  const handleDelete = async(e,id) =>{
    e.preventDefault()
    if(!window.confirm("Are you sure you want to delete note?")) return

    try {
      await api.delete(`/notes/${id}`)
      // await api.get('/notes')
      setNotes((prev)=>prev.filter(note => note._id !== id))
      toast.success("Note deleted")
    } catch (error) {
      console.log("error deleting note",error)
      toast.error("error deleting note")
    }

  }

  return (
    <div>
        <Link to={`/noteDetail/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'>
      <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
            <span className='text-sm text-base-content/60'>
            {formatDate(new Date(note.createdAt))}
            </span>
            <div className='flex items-center gap-1'>
                <button className='btn btn-ghost btn-xs text-green-500'>Edit</button>
                <button className='btn btn-ghost btn-xs text-error'onClick={(e)=> handleDelete(e,note._id)}>Delete</button>

            </div>

        </div>

      </div>
        </Link>
    </div>
  )
}

export default NoteCard
