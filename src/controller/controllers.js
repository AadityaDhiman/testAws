import User from '../models/user.js'

const Controller = {
    getUser: async (req, res) => {
        const user = await User.find({})
        const count = await User.countDocuments({})
        return res.status(200).json({user:user, count:count})
    }
}

export default Controller;