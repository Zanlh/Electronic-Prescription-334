import React, { useState, useEffect, useContext} from "react";

import styles from "./style.module.css";

import SearchBar from "../../components/SearchBar";

import Title from "../../commom-ui/Title";
import Container from "../../commom-ui/Container";

import TokenImage from "../../img/token.png";

// hoc
import statusWrapper from "../../hoc/statusWrapper";

import { UserInfoContext } from '../../context/userContext';

import { apiGetUserIssues } from '../../api';

import { TextMatching } from "../../algo";

const TokenPage = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [progress, setProgress] = useState(0);
  const [issues, setIssues] = useState([]);

  const [targetToken, setTargetToken] = useState('');
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    console.log(value);

    const target = TextMatching("token", value, issues);
    if (target.length > 0) setTargetToken(target);
    else setTargetToken('');
  };

  const getIssues = async ({ token, id }) => {
    if (userInfo.role === "user") return await apiGetUserIssues({ token });
  };

  const fetchIssues = async () => {
    const { result, message, data } = await getIssues({
      token: userInfo.token,
      id: userInfo.userId,
    });
    console.log("issues", result, message, data);
    if (result !== "1" || !data) {
      setProgress(1);
    } else {
      setProgress(2);
      setIssues([...data.data.issues]);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, [userInfo.token]);

  console.log(issues);

  console.log(targetToken);

  return (
    <Container>
      <Title>Token</Title>
      <SearchBar
        value={searchValue}
        onChange={(e) => onSearchChange(e)}
        placeholder="token"
      />
     

      <div className={styles.tokenContainer}>
      {!targetToken ? <>{issues.map((issue) => (
          <div className={styles.token}>
            <img className={styles.qr} src={TokenImage} alt="token" />
            <div className={styles.text}>{issue.token}</div>
          </div>
        ))}
        </> : <div className={styles.token}>
            <img className={styles.qr} src={TokenImage} alt="token" />
            <div className={styles.text}>{targetToken[0].token}</div>
          </div>}
      </div>
    </Container>
  );
};

export default statusWrapper(TokenPage);
