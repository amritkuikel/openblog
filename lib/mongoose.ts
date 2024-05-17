import mongoose from "mongoose";
const url =
  "mongodb+srv://amritkuikel5689:asdfghjkl@cluster0.rlam2sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export default function mongooseConnect() {
  mongoose.connect(url).then(() => {
    console.log("db connected");
  });
}