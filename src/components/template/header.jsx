/* eslint-disable react/prop-types */
// Assets
import { MainField } from './header.style';

const HeaderField = ({ title }) => {
    return (
        <MainField>
            <h3>{title}</h3>
        </MainField>
    );
};

export default HeaderField;
