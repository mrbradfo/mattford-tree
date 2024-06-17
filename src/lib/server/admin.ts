import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private';
import pgk from 'firebase-admin';


try {
    pgk.initializeApp({
        credential: pgk.credential.cert({
            projectId: FB_PROJECT_ID,
            clientEmail: FB_CLIENT_EMAIL,
            privateKey: FB_PRIVATE_KEY
        })
    });
} catch (err: any) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase admin initialization error', err.stack);
    }
}


// can only be used on the server aka server.ts or pages.server.ts files
export const adminDB = getFirestore();
export const adminAuth = getAuth();