"use client"
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Heading from "@/components/heading";

type EmptyStateProps = {
  title?: string;
  subTitle?: string;
  showReset?: boolean;
};

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No matches found!",
  subTitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subTitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            label="Remove all filters"
            outline
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
