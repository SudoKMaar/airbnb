import EmptyState from "@/components/emptyState";
import ClientOnly from "@/components/clientOnly";
import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListings from "@/actions/getFavoriteListings";
import FavoritesClient from "./favoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subTitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
