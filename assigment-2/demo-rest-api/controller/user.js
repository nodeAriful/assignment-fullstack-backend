const { writeFile,readFile } = require("../utils/db");

const userPostController = (req, res)=>{
    const data = req.body;
    writeFile(data)
    res.status(201).json({data:data, message: "Create user successfully"})
};

const userGetController = (req, res)=>{
    const data = readFile()
    res.status(201).json(data)
};

module.exports = {
    userPostController,
    userGetController
}