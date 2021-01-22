import { FunctionComponent } from "react";

interface Props {
  rating: number;
}
export const StarRatings: FunctionComponent<Props> = ({ rating }: Props) => {
  let starArray: React.ReactNode[] = [];

  const star: string[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(" fas");
    } else if (i <= Math.ceil(rating) && !Number.isInteger(rating)) {
      star.push("-half-alt fas");
    } else if (rating <= i) {
      star.push(" far");
    }
  }

  return (
    <div>
      {star.map((string) => (
        <i className={`text-warning fa-star${string}`} />
      ))}
    </div>
  );
};
