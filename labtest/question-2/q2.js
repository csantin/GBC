var fs = require ('fs')
var p = require ('path')

const clearLog = () => {
    if(fs.existsSync('Logs')){
        process.chdir('Logs')
        let folder = process.cwd()
        let allFiles = fs.readdir(folder, (err, files) => {
            if (err) throw err
            files.filter(f => p.extname(f) == '.txt')
            .forEach(f => console.log('delete files...' + f))
            files.filter(f => p.extname(f) == '.txt')
            .forEach(f => fs.unlinkSync(folder + '\\' + f))
        })
        process.chdir('..')
        var myCallback = function(){
            fs.rmdir("Logs")
        }
        fs.rmdir("Logs", myCallback)
    }
}

const addLog = () => {
    if(!fs.existsSync('Logs')){
        fs.mkdirSync('Logs')
    }
    process.chdir('Logs')
    for (var x = 0; x < 10; x++){
        fs.writeFileSync('log' + x + '.txt', 'Log file ' + x)
    }
    
    let folder = process.cwd()
    let ext = '.txt'
    let allFiles = fs.readdir(folder, (err, files) => {
        if (err) throw err
        files.filter(f => p.extname(f) == ext)
        .forEach(f => console.log(f))
    })
}

clearLog()