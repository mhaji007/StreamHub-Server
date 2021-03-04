// Used to store relationship between two documents.
// A Ref is considered to be a manual reference. A manual references is where you save the ObjectId
// field of one document in another document as a reference.
// Using manual references is the practice of including one document's ObjectId field in another document. The application can then issue
// a second query to resolve the referenced fields as needed.
import { ObjectId } from "mongodb";
// either generic object or ObjectId
export type Ref<T> = T | ObjectId;
