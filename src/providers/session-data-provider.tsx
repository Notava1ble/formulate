"use client";

import { CollectionType } from "@/supabase/db/collection";
import { NoteType } from "@/supabase/db/notes";
import type { User } from "@supabase/auth-js";
import { SubCollectionType } from "@/supabase/db/subCollection";
import { createContext, useContext, ReactNode } from "react";

export interface SessionDataContextType {
  user: User;
  collections: CollectionType[];
  subCollections: SubCollectionType[];
  notes: NoteType[];
}

// Create the context with a default value
const SessionDataContext = createContext<SessionDataContextType | null>(null);

// Create the Provider component
interface SessionDataProviderProps {
  children: ReactNode;
  initialData: SessionDataContextType; // The data we fetch on the server
}

export function SessionDataProvider({
  children,
  initialData,
}: SessionDataProviderProps) {
  // We simply provide the initialData received from the server.
  // The value won't change unless the whole provider is re-rendered (e.g., on a hard refresh).
  return (
    <SessionDataContext.Provider value={initialData}>
      {children}
    </SessionDataContext.Provider>
  );
}

// Create a custom hook for easy access to the data
export function useSessionData() {
  const context = useContext(SessionDataContext);
  if (!context) {
    throw new Error("useSessionData must be used within a SessionDataProvider");
  }
  return context;
}
