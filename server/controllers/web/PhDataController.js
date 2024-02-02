// const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")
const PhDataModel = require("../../models/PhDataModel")

const PhDataController = {

    /**
     * 
     * @param {username(req.params)} req 
     * @param {*} res
     * get All record from user api
     */
    getUserAllData: async (req, res) => {
        const { username } = req.params
        
        let result = await PhDataModel.find({
            username
        })

        if (result.length === 0) {
            res.json({
                code: "1001",
                msg: "read failed",
                data: null
            })
        } else {
            res.json({
                code: '0000',
                msg: 'success',
                data: result
            })
        }
    },

    /**
     * 
     * @param {updateContent(req.body)} req 
     * @param {*} res 
     */
    uploadNewPhData: async (req, res) => {

        try {

            const newData = new PhDataModel(req.body);
            const savedData = await newData.save();
            res.json({
                code:"0000",
                msg: 'Data uploaded successfully.',
                data: savedData
            })

        } catch (error) {
            console.error(error.message);
            // res.status(500).json({ error: 'Internal Server Error' });
            res.json({
                code:"1001",
                msg:"Internal Server Error",
                data:null
            })
        }

    },

    /**
     * 
     * @param {id(req.params)} req 
     * @param {json} res 
     */
    deletePhData: async (req,res)=>{
        const {id} = req.params

        async function deleteDataById(id) {
            try {

                
                // 使用 mongoose 的 findByIdAndRemove 方法来查找并删除数据
                const result = await PhDataModel.findByIdAndDelete(id);

                if (result) {
                    res.json({
                        code: "0000",
                        msg: "success",
                        data: result
                    })

                } else {
                    res.json({
                        code: "1001",
                        msg: 'Document not found.',
                        data: null
                    })
                }
            } catch (error) {
                console.error(error.message);
                res.json({
                    code: "1001",
                    msg: error.message,
                    data: null
                })
            }
        }

        deleteDataById(id)
    },

    /**
     * 
     * @param {updateContent(req.body)} req 
     * @param {json} res 
     */
    updatePhData: async (req,res)=>{

        const { id } = req.params

        async function updateDataById(id, newData) {
            try {
                // 使用 mongoose 的 findByIdAndUpdate 方法来查找并更新数据
                const result = await PhDataModel.findByIdAndUpdate(id, newData, { new: true });
                res.json({
                    code: "0000",
                    msg: "success",
                    data: result
                })

            } catch (error) {
                console.error(error.message);
                res.json({
                    code: "1001",
                    msg: error.message,
                    data: null
                })
            }
        }

        updateDataById(id, { ...req.body });
    },

    /**
     * 
     * @param {null} req 
     * @param {json} res 
     * @returns 
     */
    getAllData: async (req,res)=>{

        try {
            const allData = await PhDataModel.find({isShared: true});
            return res.json({
                code: "0000",
                msg: 'success',
                data: allData
            })
            
        } catch (error) {
            console.error(error.message);
            res.json({
                code: "1001",
                msg: error.message,
                data: null
            })
            
        }

    }
}

module.exports = PhDataController