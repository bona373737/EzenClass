import React from "react";
import Profile from "./Profile";
import { Routes, Link, Route } from "react-router-dom";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록 :</h3>
      <ul>
        <li>
          <Link to="profiles/velopert"> velopert</Link>
        </li>
        <li>
          <Link to="profiles/gildong">gildong</Link>
        </li>
      </ul>
      <Routes>
        {/* path에 URL 파라미터가 없는경우 */}
        <Route
          path="/profiles"
          exact={true}
          render={() => {
            <div>사용자를 선택해주세요</div>;
          }}
        />
        {/* URL파라미터 활용 */}
        <Route path="profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
