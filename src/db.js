import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    'https://bsutjzmqmifbxbfnxrho.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzdXRqem1xbWlmYnhiZm54cmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNzI2ODEsImV4cCI6MjA1ODg0ODY4MX0.NB6j2NMapsb3QJJ1nYXX3AAbN4ttToDqyqTsfBQQgUE'
)

export const getAvgScore = async () => {
    const { data, error } = await supabase.from("Scores").select('score')
    let avg = 0
    data.forEach(row => avg += row.score)
    return avg / data.length
}

export const insertScore = async (value) => {
    await supabase.from("Scores").insert([{ "score": value } ])
}