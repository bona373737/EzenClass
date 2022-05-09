import PropTypes from "prop-types";

const DefaultProps = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <h1>{props.userName}</h1>
    </div>
  );
};
DefaultProps.defaultProps = {
  children: "안녕",
  userName: "홍길동",
};

DefaultProps.propTypes = {
  //   children: PropTypes.string,
  //   userName: PropTypes.string,
};
export default DefaultProps;
