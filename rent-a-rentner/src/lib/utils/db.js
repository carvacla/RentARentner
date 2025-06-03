import { MongoClient, ObjectId } from "mongodb";
const DB_URI = "mongodb+srv://admin:5g7j2BfSNsCAvFjd@cluster0.py3h74u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("rent-a-rentner");