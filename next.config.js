module.exports = {
  reactStrictMode: true,
  env:{
    MONGO_URI: `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASS}@devcluster.nvdzr.mongodb.net/coursefolder?retryWrites=true&w=majority`
  }

}
