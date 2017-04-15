
import PropTypes from 'prop-types'
import styled from 'styled-components';

/**
 * Center horizontally and vertically
 *
 * <Center>
 *     <div>This</div>
 *     <div>Will Be Centered</div>
 * </Center>
 *
 *
 */
export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

Center.propTypes = {
    children: PropTypes.node
};


export default Center;