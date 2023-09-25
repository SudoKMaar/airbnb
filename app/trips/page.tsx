import EmptyState from "@/components/emptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subTitle="Please login" />;
  }
  const reservations = await getReservations({ userId: currentUser.id });
  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subTitle="Looks like you havent reserved any trips."
      />
    );
  }
  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
