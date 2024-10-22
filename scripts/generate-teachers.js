const fs = require('fs')
const path = require('path')
const faker =  require('@faker-js/faker').faker


const generateTeacher = () => {
    let teacher = {}

    // Teacher Name
    teacher.firstName = faker.person.firstName()
    teacher.lastName = faker.person.lastName()

    
    teacher.fullName = faker.person.fullName({ firstName: teacher.firstName, lastName: teacher.lastName })

    // Teacher DOB
    teacher.dateOfBirth = faker.date.birthdate({ mode: 'year', min: 1985, max: 2000 })

    // Teacher Gender
    teacher.gender = faker.person.sex()

    // Teacher TRN
    teacher.trn = "" + faker.number.int({ min: 123456, max: 999999 })

    // Teacher NIN
    teacher.nationalInsurance = faker.string.alphanumeric({ length: 9, casing: 'upper' }) // 'x1Z7f'

    // Teacher email
    teacher.email = faker.internet.email({ firstName: teacher.firstName, lastName: teacher.lastName }) // 'Jeanne_Doe96@example.net'

    // Teacher phone
    teacher.mobile = faker.string.octal({ length: 10, prefix: '0' })

    return teacher

}


const generateTeachers = () => {
    const teachers = []
    for(let i = 0; i < 1; i++) { //set for only one teacher at present
        teachers.push(generateTeacher())
      }
    
      return teachers
    
}


const generateTeachersFile = (filePath) => {
const teachers = generateTeachers()
const filedata = JSON.stringify(teachers, null, 2)
    fs.writeFile(
        filePath,
        filedata,
        (error) => {
        if (error) {
            console.error(error)
        }
        console.log(`Teachers generated: ${filePath}`)
        }
    )
}


  
  generateTeachersFile(path.join(__dirname, '../app/data/teachers.json'))