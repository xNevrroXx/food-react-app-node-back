import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import {NavLink} from "react-router-dom";

// styles
import {ListCategory, SLink} from "./styled-components";

const Category = () => {
    return (
        <ListCategory>
            <SLink to={'/cuisine/italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/american'}>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/thai'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/japanese'}>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </SLink>
        </ListCategory>
    );
};

export default Category;