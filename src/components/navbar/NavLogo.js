import { Link } from "react-router-dom";

export default function NavLogo(props) {

    return (
        <Link to="/dashboard" className="my-auto mx-3">
            <img src={props.imageSource} className="w-14"/>
        </Link>
    );
}