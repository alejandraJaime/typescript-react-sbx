import { Entry } from "../types"
import entriesArray from "../services/entries.json"

const entries: Array<Entry> = entriesArray as Array<Entry>
export const getEntries = (): Array<Entry> => entries

export const getEntryById = (id: string): Array<Entry> =>
  entriesArray.filter((entry) => entry["id"].toString() === id) as Array<Entry>

export const addNewEntry = () => null
