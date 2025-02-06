import { Button } from "../ui/button";

export const BackButton = ({}) => {
  return (
    <Button
      variant="destructive"
      className=""
      onClick={() => window.history.back()}
    >
      Back to Home
    </Button>
  );
};
