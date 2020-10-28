const fs = require('fs')
class Visitor {
    constructor (fullName, age, date, time, comments, assistant ){
        this.fullName=fullName;
        this.age=age;
        this.date=date;
        this.time=time;
        this.comments=comments;
        this.assistant=assistant;

      
}

 save(fullname) {
    fs.writeFile('visitor_' + this.fullName + '.json', JSON.stringify(this, null, 3), (err) => {
        if (err) {
            throw err;
        }
    });
}


 load(fullName) {
    let name = fullName.replace(' ', '_')
    fs.readFile('visitor_' + name + '.json', 'utf8', (err, data) => {
        if (err) {
            throw err; 
        } else {
            console.log(data);
        }
    })
}
}

module.exports = {
    Visitor
}
