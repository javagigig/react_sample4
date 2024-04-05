import { Link } from "react-router-dom";
import './Menu.css';
import { VscHome } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { CgLogIn } from "react-icons/cg";

function Navbar(){
    // <nav> nav 목록_시멘틱 태그
    return <div className="container">
            <nav>
                <ul>
                    <li><Link to="/"><VscHome /></Link></li>
                    <li><Link to="/"><VscAccount /></Link></li>
                    <li><Link to="/login"><CgLogIn /></Link></li>
                    <li><Link to="/search"><VscSearch /></Link></li>
                    <li><Link to="/profile"><VscHeart /></Link></li>
                    <li><Link to="/postAdd"><VscDiffAdded /></Link></li>
                    <li><Link to="/profile">로그아웃</Link></li>
                </ul>
            </nav>
        </div> 
}

export default Navbar;