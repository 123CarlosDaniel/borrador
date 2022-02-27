const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new Schema({
    email : String,
    password : String,
    rol :String
},{
    timestamps: true,
    versionKey: false
})

userSchema.methods.encryptPassword = async(password)=> {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

userSchema.methods.matchPassword = async function(password) {
    const value = await bcrypt.compare(password,this.password)
    return value
}
module.exports = model('user',userSchema)