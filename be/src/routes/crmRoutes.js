import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

const filterContacts = (contacts, { owner, view, search }) => {
  const query = search?.toLowerCase();
  return contacts.rows.filter((row) => {
    const matchesOwner = !owner || owner === "All" || row.owner === owner;
    let matchesView = true;
    switch (view) {
      case "Active":
        matchesView = row.status === "Active";
        break;
      case "Renewals":
        matchesView = row.segments.includes("Renewal");
        break;
      case "Expansion":
        matchesView = row.segments.includes("Expansion");
        break;
      case "Churn risk":
        matchesView = row.status.toLowerCase().includes("risk");
        break;
      default:
        matchesView = true;
    }

    const matchesSearch = !query
      || row.name.toLowerCase().includes(query)
      || row.company.toLowerCase().includes(query)
      || row.email.toLowerCase().includes(query);

    return matchesOwner && matchesView && matchesSearch;
  });
};

router.get("/contacts", (req, res) => {
  const contacts = store.getContacts();
  const rows = filterContacts(contacts, {
    owner: req.query.owner,
    view: req.query.view,
    search: req.query.search,
  });
  res.json({ ...contacts, rows });
});

router.post("/contacts", (req, res, next) => {
  try {
    const created = store.upsertContact(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});

router.get("/deals", (_req, res) => {
  res.json(store.getDealsBoard());
});

