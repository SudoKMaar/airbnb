import EmptyState from "@/components/emptyState";
import ClientOnly from "@/components/clientOnly";
import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getListings";
import PropertiesClient from "./propertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subTitle="Please login" />;
  }
  const listings = await getListings({ userId: currentUser.id });
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subTitle="Looks like you have no properties."
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
