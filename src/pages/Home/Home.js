import { connect } from "react-redux";

import "./Home.css";

function Home({ user }) {
  return <div className="landing-page"></div>;
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Home);
