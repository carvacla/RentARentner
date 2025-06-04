import db from '$lib/utils/db.js';
import { ObjectId } from 'mongodb';

export const load = async ({ params }) => {
    const rentner = await db.findOne(params.rentner_id);
    console.log("Rentner-Details:", rentner);
    return rentner.rentner;
};
