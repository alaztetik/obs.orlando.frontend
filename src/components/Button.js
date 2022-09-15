import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link
      to={props.link}
      className="p-3 m-1 text-orlando-white bg-orlando-gray rounded block justify-start max-w-5xl h-12 hover:bg-orlando-orange text-center hover:text-orlando-gray"
    >
      {props.buttonText}
    </Link>
  );
}
