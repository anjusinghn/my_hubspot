import { mockData } from "./mockData.js";
import { customAlphabet } from "nanoid";

const nanoId = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);

const deepClone = (value) => JSON.parse(JSON.stringify(value));

export class DataStore {
