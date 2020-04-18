const fs =require('fs')
const chalk= require('chalk')
const getNotes = () =>
{
    return 'your notes...'
}

    const addNote = (title,body) =>
    {
       const notes = loadNotes()
      
       const duplicateNote = notes.find((note) => note.title===title)
       
        
    //        const duplicateNotes = notes.filter(function(note)
    //    {
    //        return note.title===title  /previoulsy wriiten as
    
       if (!duplicateNote){
        notes.push({
            title: title,
            body:body
        })  
        saveNotes(notes)
        console.log(chalk.green.inverse('new node taken'))
     }
     else{
         console.log(chalk.red.inverse('no title taken'))
     }
       }
       
    const removeNote = function(title)   
    {
      const notes = loadNotes()  
      const notesToKeep=notes.filter(function(note){
      
      return note.title !== title
      })
       if(notes.length>notesToKeep.length){
       console.log(chalk.green.inverse('note removed'))
      saveNotes(notesToKeep)
       }
       else{
           console.log(chalk.red.inverse('no note found'))
       }
    }
    const listNotes =() =>{
        const notes=loadNotes()
          console.log(chalk.inverse('your notes'))
          notes.forEach(note=> {
              console.log(note.title)
          });
    }
    
    const saveNotes = function(notes){
        const dataJSON= JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSON)
    }
    const readNote = (title) =>
    {
    const notes = loadNotes()
    const note = notes.find((note) => note.title===title) 
    if (note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('no title taken'))

    }
    }
    const loadNotes= function()
    {
        try {
            const dataBuffer= fs.readFileSync('notes.json')
   const dataJSON = dataBuffer.toString()
   return JSON.parse(dataJSON)
        }
   catch(e)
   {
       return[]
   }
}

module.exports = {
getNotes: getNotes,
addNote:addNote,
removeNote:removeNote,
listNotes:listNotes,
readNote:readNote
}
