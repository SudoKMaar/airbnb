import EmptyState from "@/components/emptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import TripsClient from "./TripsClient";
import ClientOnly from "@/components/clientOnly";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return;
    <ClientOnly>
      <EmptyState title="Unauthorized" subTitle="Please login" />;
    </ClientOnly>;
  }
  const reservations = await getReservations({ userId: currentUser.id });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subTitle="Looks like you havent reserved any trips."
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />;
    </ClientOnly>
  );
};

export default TripsPage;
