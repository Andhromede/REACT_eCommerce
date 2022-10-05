import { Link } from "react-router-dom";

function NavLink(props) {
    const { link, text, classe } = props;

    return (
        <div className="p-2">
            <Link className={classe} to={link}>{text}</Link>
        </div>

        // <div className="nav-item p-2">
        //     <a className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" href={link}>{text}</a>
        // </div>
    );
}

export default NavLink;