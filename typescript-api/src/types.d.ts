export type Mood = "happy" | "tired" | "hungry" | "sleepy"

export interface Entry {
  id: number
  date: string
  mood: Mood
  title: string
  body: string
}
