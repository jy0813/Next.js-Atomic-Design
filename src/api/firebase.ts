import {initializeApp} from "@firebase/app";
import {get, getDatabase, ref} from "@firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATA_BASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getTables = async () => {
  return get(ref(database, 'tables'))
      .then(snapshot => {
        if (snapshot.exists()) {
          return Object.values(snapshot.val());
        }
        return [];
      })
}