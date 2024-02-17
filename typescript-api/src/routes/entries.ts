import express from "express"
import { getEntries, getEntryById } from "../services/entriesServices"

const router = express.Router()

// GETS ALL ENTRIES
router.get("/", (_req, res) => {
  try {
    const entries = getEntries()
    return res.status(200).send(entries)
  } catch (err) {
    return res.status(404).json(`Error in API: ${err}`)
  }
})

// GETS AN ENTRY BY ID
router.get("/:entryId", (_req, res) => {
  try {
    const { entryId } = _req.params
    const filteredEntry = getEntryById(entryId)
    if (filteredEntry.length === 0)
      return res.status(404).json("The entry id searched does not exist")

    return res.status(200).json(filteredEntry)
  } catch (err) {
    return res.status(404).json(`Error in API: ${err}`)
  }
})

export default router
