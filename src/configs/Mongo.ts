import Mongoose from 'mongoose'

// const MONGODB_URL = 'mongodb://user:password@localhost:portNumber/database'
const MONGODB_URL = 'mongodb://localhost:27017/crud_mongo'
export default (mongoose: typeof Mongoose) => {
  const url = MONGODB_URL
  return mongoose.connect(url as string, { useNewUrlParser: true })
}
