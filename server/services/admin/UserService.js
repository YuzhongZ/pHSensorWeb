const UserModel = require("../../models/UserModel")

const UserService = {
    login: async({username,password})=>{
        // const {username,password} = req
        // console.log(password)
        return UserModel.find({
            username,
            password
        })

    },

    register: async({username, password, email})=>{

        /**
         * register api
         * 1. check the data transfered from front-end
         * 2. check whether the username has been registered
         * 3. create the detail data
         * 4. save to database
         */

        const existingUsername = await UserModel.findOne({ username });
        const existingEmail = await UserModel.findOne({ email });
        

        if (!!existingUsername){
            return {
                code : '1002',
                msg : 'username has been used',
                data: null
            }
        }

        if (!!existingEmail) {
            return {
                code: '1003',
                msg: 'email has been registered',
                data: null
            }
        }
        
        await UserModel.create({
            usename,
            password,
            email
        },(err,data) => {

            if(err) {
                return {
                    code: '1001',
                    msg: err.message,
                    data: null
                }
            }

            return {
                code: '0000',
                msg: 'User created successfully!',
                data: null
            }

        });
    
    }

}

module.exports = UserService