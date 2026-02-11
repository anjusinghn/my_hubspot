import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

const filterContacts = (contacts, { owner, view, search }) => {
  const query = search?.toLowerCase();
  return contacts.rows.filter((row) => {
