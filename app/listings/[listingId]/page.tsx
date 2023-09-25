import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingbyId";
import EmptyState from "@/components/emptyState";
import ListingClient from "./listingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  if (!listing) {
    return <EmptyState />;
  }
  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default ListingPage;
