"use client";
export default function getToken(): string | null {
  try {
    return localStorage.getItem("user-notes");
  } catch (error) {
    return "Invalid token!";
  }
}
