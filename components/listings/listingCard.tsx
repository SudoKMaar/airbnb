"use client";
import { useCallback, useMemo } from "react";
import Image from "next/image";
import { format } from "date-fns";
import Button from "@/components/button";
import HeartButton from "@/components/heartButton";
import type { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/types";

type ListingCardProps = {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionId = "",
  actionLabel,
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);
  const isCurrentUserOwner = data.userId === currentUser?.id;
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    },
    [onAction, actionId]
  );
  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);
  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);
  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className={`col-span-1 cursor-pointer group`}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="listing"
            src={data.imageSrc}
            className="object-cover h-full w-full sm:group-hover:scale-105 transition"
          />
          {!isCurrentUserOwner && (
            <div className="absolute top-3 right-3">
              <HeartButton listingId={data.id} currentUser={currentUser} />
            </div>
          )}
        </div>
        <div className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-airbnb-light-gray">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold"> &#8377; {price}</div>
          {!reservation && <span className="font-light">night</span>}
        </div>
        {onAction && actionLabel && (
          <Button
            small
            disabled={disabled}
            onClick={handleCancel}
            label={actionLabel}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
