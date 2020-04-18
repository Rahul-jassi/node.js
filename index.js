 const chalk=require('chalk')
 const yargs=require('yargs')

 // const validator = require('validator')
const notes = require('./notes.js')
// console.log(process.argv)
// console.log(yargs.argv)
// another task
//wireup read command
// 1.setup title option for read command
// 2.create readnote.js in notes.js
//-find note and print title (styled) and body plain 
//- no note find then print error in red
// 3. have the command handler call the function
// test your work
yargs.version= ('1.0.0')
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'note-title',
            demandOption:'true',
            type:'string'
        },

     body:{
        describe:'title',
        demandOption:'true',
        type:'string'
    }
},
    handler(argv){
    //    console.log('adding a new note',argv)
    //    console.log('title' + argv.title)
    //    console.log('BODY: ' + argv.body)
    notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder:{
        title:{
            describe:'note-title',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
       notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'list allnote',
    handler(){    //removing function here which is earlier written as handler:function now its  written as handler()
       notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'read a new note',
    builder:{
        title:{
          describe:'note-title',
          demandOption:true,
          type:'String'
        }

    },
    handler(argv){
        notes.readNote(argv.title)
    //    console.log('read a new note')
    }
})
console.log(yargs.argv)

yargs.parse()
// const command = process.argv[0]
// if (command ==='add')
// {
//     console.log('adding node')
// }
//   else(command==='remove')   
//   {
//       console.log('removing node')
//   }
// const msg = getNotes()
// console.log(msg) 
// const log=console.log;
// log(chalk.red.inverse.bold('Hello') + 'world'+ chalk.yellow('|'))
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));

// console.log(validator.isEmail('11gmail.com'))
// console.log(validator.isURL('https://www.udemy.com/'))
// console.log(chalk.green('success'))



// const add = require('./utilis.js')
// const sum = add(4 , 8)
// console.log(sum)