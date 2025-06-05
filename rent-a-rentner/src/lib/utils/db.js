import { MongoClient, ObjectId } from "mongodb";
import bcrypt from 'bcrypt';

const DB_URI = "mongodb+srv://admin:5g7j2BfSNsCAvFjd@cluster0.py3h74u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("rent-a-rentner");

async function loginUser(email, password) {
    try {
        const existingUser = await db.collection('users').findOne({ email: email });

        if (!existingUser) {
            return { error: 'E-Mail nicht gefunden.' };
        }

        const valid = await bcrypt.compare(password, existingUser.password);

        if (!valid) {
            return { error: 'Falsches Passwort.' };
        }

        return { success: true, userId: existingUser._id.toString() };
    } catch (error) {
        // TODO Claudia: errorhandling
        console.log("Login-Fehler: ", error.message);
    }
    return null;
}

async function createUser(user) {
  try {
    const existingUser = await db.collection('users').findOne({ email: user.email });
    if (existingUser) {
        return { error: 'E-Mail existiert bereits.' };
    }

    user.password = await bcrypt.hash(user.password, 10);   

    const collection = db.collection("users");
    const result = await collection.insertOne(user);
    return result.acknowledged;

  } catch (error) {
    // TODO Claudia: errorhandling
    console.log(error.message);
  }
  return null;
}

async function deleteUser(userId) {
    try {
        const result = await db.collection('users').deleteOne({ id: new ObjectId(userId) });
        return result.acknowledged; 
    } catch (error) {
        // TODO Claudia: errorhandling
        console.log(error.message);
    }
    return null;
}

async function getUserById(userId) {
    try {
        console.log("UserId: ", userId);
        const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
        
        console.log("Session attempt with: ", user);

        if (!user) {
            return { error: 'Session nicht gefunden.' };
        }

        return { success: true, user: user, userId: user._id.toString() };
    } catch (error) {
        // TODO Claudia: errorhandling
        console.log("Session-Fehler: ", error.message);
    }
    return null;
}

async function getAllRentner() {
    try {
        const rentner = await db.collection('users').find({ type: 'rentner' }).toArray();

        rentner.forEach(r => {
            r._id = r._id.toString();
        });
        
        if (!rentner) {
            console.log("Keine Rentner gefunden.");
            return { error: 'Keine Rentner gefunden.' };
        }

        return { success: true, rentner: rentner, rentnerId: rentner._id };
    } catch (error) {
        // TODO Claudia: errorhandling
        console.log("Fehler beim Suchen der Rentner: ", error.message);
    }
    return null;
}

async function findOne(rentner_id) {
    try {
        if (!ObjectId.isValid(rentner_id)) {
            console.log("Ungültige Rentner-ID: ", rentner_id);
            throw error(400, 'Ungültige Rentner-ID');
        }

        const rentner = await db.collection('users').findOne({
            _id: new ObjectId(rentner_id)
        });

        if (!rentner) {
            throw error(404, 'Rentner nicht gefunden');
        }

        rentner._id = rentner._id.toString();

        return {
            rentner: rentner,
        };
    } catch (error) {        
        console.log("Fehler beim Suchen der Rentner: ", error.message);
    }    
}

async function createBooking(booking) {
	try {
		const result = await db.collection('bookings').insertOne(booking);
		return result.insertedId;
	} catch (error) {
        // TODO Claudia: errorhandling
		console.error("Fehler beim Erstellen der Buchung:", error);
		return null;
	}
}


export default {
  loginUser,
  createUser,
  deleteUser,
  getUserById,
  getAllRentner,
  findOne,
  createBooking
};