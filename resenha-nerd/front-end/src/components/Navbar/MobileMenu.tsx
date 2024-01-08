import { ImMenu } from "react-icons/im";

interface props {
  onClick: () => void;
}
export default function MobileMenu({ onClick }: props) {
  return (
    <div className="flex md:hidden">
      <button onClick={onClick} className="outline-none cursor-pointer hover:scale-90 text-white">
        <ImMenu/>
      </button>
    </div>
  );
}
