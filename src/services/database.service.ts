import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'
import { Cat } from '../models/cat.model';

const firebaseConfig = {

    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
}
    
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export async function getCats(){

    const catsCollection = collection(db, 'cats')
    const catsSnapshot = await getDocs(catsCollection)

    return catsSnapshot.docs.map(doc => ({_id:doc.id, ...doc.data()})) as Cat[]
}