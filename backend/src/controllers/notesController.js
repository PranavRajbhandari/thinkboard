import Note from "../models/Note.js"

export const getAllNotes = async (req,res)=>{
    try{
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    }catch (error){
        console.log("Error in get")
        res.status(500).json({message:"Internal server error"})
    }
}

export const getNoteById = async (req,res) => {
    try {
        const noteDetail = await Note.findById(req.params.id)
        res.status(200).json(noteDetail)
    } catch (error) {
        
    }
}

export const createNotes = async (req,res)=>{
    try{
        const { title,content } = req.body
        const newNote = await Note.create({ title, content });
        res.status(201).json(newNote)

    }catch(error){
        console.log("Error in post",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export const updateNotes = async (req,res)=>{
    try{
        const {title,content} = req.body
        await Note.findByIdAndUpdate(req.params.id,{title,content})
        res.status(200).json({message:"notes updated"})
    }catch(error){
        console.log("Error in update",error)
        res.status(500).json({message:"Internal server error"})
}

}

export const deleteNotes = async (req,res)=>{
    try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id)
    res.json({message:"Note deleted"},deleteNote)
    } catch (error) {
        
    }
}

