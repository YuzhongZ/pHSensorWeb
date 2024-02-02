// const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")
const UserModel = require("../../models/UserModel")

const md5 = require("md5")

const UserController = {

    /**
     * 
     * @param {*} req 
     * @param {*} res
     * login api
     * 1. search in database
     * 2. success token
     * 3. failed return 
     */
    login: async (req, res)=>{
        const {username, password} = req.body
        
        let result = await UserModel.find({
            username,
            password
        })

        if(result.length===0){
            res.json({
                code: "1001",
                msg: "username does not match with password",
                data: null
            })
        }else{
            const token = JWT.generate({
                _id:result[0]._id,
                username:result[0].username
            },'1d')
            res.header('Authorization',token)
            res.json({
                
                code: '0000',
                msg: 'login success',
                data: {
                    username,
                    email: result[0].email
                }
            })
        }
    },
    
    /**
     * register api
     * 1. check the data transfered from front-end
     * 2. check whether the username has been registered
     * 3. create the detail data
     * 4. save to database
     */

    register: async (req, res)=>{
        const {username, password, email} = req.body

        const existingUsername = await UserModel.findOne({ username });
        const existingEmail = await UserModel.findOne({ email });


        if (!!existingUsername) {
            res.json({
                code: '1002',
                msg: 'username has been used',
                data: null
            })
            return
        }

        if (!!existingEmail) {
            res.json({
                code: '1003',
                msg: 'email has been registered',
                data: null
            })
            return
        }
        

        async function create(){

            const user = new UserModel({
                username,
                password,
                email
            });

            await user.save()

            const token = JWT.generate({
                _id: user._id,
                username: user.username
            }, '1d')

            res.header('Authorization', token)
            
            res.json({
                code: '0000',
                msg: 'User created successfully!',
                data: null
            })
        }

        create().catch(err => {

            res.json({
                code: '1001',
                msg: err.message,
                data: null
            })
            return
        })


    }
}

module.exports = UserController