import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Item from "./Item/Item";

type Props = {
  location: number;
  setLocation: (location: number) => void;
  position: boolean;
};

export default function Body({ location, setLocation, position }: Props) {
  return (
    <div>
      <Item location={location} setLocation={setLocation} position={position} />
      <Footer />
    </div>
  );
}
