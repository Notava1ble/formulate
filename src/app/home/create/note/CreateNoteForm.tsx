"use client";

import { useSessionData } from "@/providers/session-data-provider";
import { useSearchParams } from "next/navigation";

const CraeteNoteForm = () => {
  const { subCollections } = useSessionData();
  const searchParams = useSearchParams();

  const subCollectionId = Number(searchParams.get("subCollectionId"));
  const subCollection = subCollections.find(
    (sub) => sub.id === subCollectionId
  );

  return (
    <div>
      Creating a note for <b>{subCollection?.name}</b>
    </div>
  );
};
export default CraeteNoteForm;
