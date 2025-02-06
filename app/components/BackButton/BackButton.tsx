import { IoMdArrowBack } from "react-icons/io";
import { Button } from "../ui/button";

export const BackButton = ({}) => {
  return (
    <Button
      variant="destructive"
      className=""
      onClick={() => window.history.back()}
    >
      Back
      {/* <IoMdArrowBack size={} /> */}
    </Button>
  );
};
