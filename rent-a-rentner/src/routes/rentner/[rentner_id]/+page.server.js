import db from '$lib/utils/db.js';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const rentner = await db.findOne(params.rentner_id);
    console.log("Rentner-Details:", rentner);
    return rentner.rentner;
};

export const actions = {
    create: async ({ locals, params }) => {
        if (!locals.userId) {
            throw redirect(303, '/login');
        }
        const booking = {
            userId: locals.userId,
            rentnerId: params.rentner_id, 
            status: 'gebucht'
        };

        await db.createBooking(booking);

        throw redirect(302, '../../gebucht'); // Redirect to gebucht page after booking
        return { success: true };
    }
};