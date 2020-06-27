/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const appStyle = css`
  text-align: center;
  color: #222222;
`;

const App = () => {
  return (
    <div css={appStyle}>
      <h1>React + Parcel</h1>
      <ul>
        <li>
          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            React
          </a>
        </li>
        <li>
          <a href="https://parceljs.org" rel="noreferrer" target="_blank">
            Parcel
          </a>
        </li>
      </ul>
      <div>
        <h2>Start Dev Server (HMR)</h2>
        <pre>yarn start</pre>
      </div>
      <div>
        <h2>Build</h2>
        <pre>yarn build</pre>
      </div>
      <div>
        <h2>Lint code \w ESLint</h2>
        <pre>yarn lint</pre>
      </div>
      <div>
        <h2>Format code \w prettier</h2>
        <pre>yarn prettier</pre>
      </div>
    </div>
  );
};

export default App;
