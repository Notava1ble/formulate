export default async function Page({
  params,
}: {
  params: Promise<{ collectionId: string }>;
}) {
  const { collectionId } = await params;
  return <div>My Post: {collectionId}</div>;
}
