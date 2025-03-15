import { connect } from "mongoose"

const connectDB = async (url = '') => {
    try {
        await connect(url);
        console.log('connection is successful');
    } catch (error) {
        console.error('error is coming ', error,);
    }
}

export default connectDB;