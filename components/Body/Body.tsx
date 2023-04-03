import Footer from "../Footer/Footer";
import Item from "./Item/Item";

type Props = {
  location: number;
  setLocation: (location: number) => void;
};

export default function Body({ location, setLocation }: Props) {
  return (
    <div>
      <Item location={location} setLocation={setLocation} />
      <Footer />
    </div>
  );
}
