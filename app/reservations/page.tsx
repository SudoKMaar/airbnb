import EmptyState from "@/components/emptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import ClientOnly from "@/components/clientOnly";
import TripsClient from "../trips/TripsClient";
const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please login" />
      </ClientOnly>
    );
  }
  const reservations = await getReservations({ authorId: currentUser.id });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations found"
          subTitle="Looks like you have no reservations on your properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ReservationsPage;
