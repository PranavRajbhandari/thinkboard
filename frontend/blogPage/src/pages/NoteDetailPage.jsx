import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router'


const NoteDetailPage = () => {
  const [note,setNote] = useState(null)
  const [loading,setLoading] = useState(false)
  const [saving,setSaving] = useState(false)
  const navigate = useNavigate()

  const {id} = useParams()
  useEffect(()=>{
    const fetchNote = async () =>{
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        console.log("error fetching note",error)
        toast.error("failed to load note detail")
      } finally{
        setLoading(false)
      }
    }
    fetchNote()
  },[id])

  
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className='btn btn-ghost'></Link>
        </div>

      </div>
      
    </div>
  )
}

export default NoteDetailPage
