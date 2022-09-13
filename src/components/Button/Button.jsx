import { PropTypes } from 'prop-types';
import { ButtonStyle } from './Button.styled';


const Button = ({ onClick, }) => (
	<ButtonStyle type="button" onClick={onClick} >
		Load more...
	</ButtonStyle>
);

Button.defaultProps = {
	onClick: () => null,
	children: null,
}

Button.propType = {
	onClick: PropTypes.func,
	children: PropTypes.node,

}

export default Button;

