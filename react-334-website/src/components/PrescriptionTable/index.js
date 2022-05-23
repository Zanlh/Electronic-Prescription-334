import React, { useContext, useState, useEffect } from "react";
import cx from "classnames";
import styles from "./style.module.css";
import { UserInfoContext } from "../../context/userContext";

import {
  apiGetUserPrescriptions,
  apiGetDoctorPrescriptions,
  apiGetPharPrescriptions,
} from "../../api";

const PrescriptionTable = (props) => {
  const { id, classes, heading, data, type } = props;

  const { userInfo } = useContext(UserInfoContext);
  const [progress, setProgress] = useState(0);
  const [prescription, setPrescription] = useState([]);

  console.log(userInfo);

  const getPrescription = async ({ token, id }) => {
    if (userInfo.role === "user")
      return await apiGetUserPrescriptions({ token, id });
    if (userInfo.role === "doctor")
      return await apiGetDoctorPrescriptions({ token, id });
    return await apiGetPharPrescriptions({ token, id });
  };

  console.log('data', data);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      const { result, message, data } = await getPrescription({
        token: userInfo.token,
        id,
      });
      console.log("prescription", result, message, data);
      if (result !== "1" || !data) {
        setProgress(1);
      } else {
        setProgress(2);
        console.log(data.data.prescriptions);
        setPrescription([...data.data.prescriptions]);
      }
    };

    if (type === "prescription") {
      fetchPrescriptions();
      console.log(prescription);
    }
  }, [userInfo.token]);

  console.log(userInfo.role);
  return (
    <table
      cellSpacing="0"
      cellPadding="5"
      className={cx(styles.table, styles[`table-border-${userInfo.role}`])}
    >
      <tr className={cx(styles.heading, styles[`heading-${userInfo.role}`])}>
        {heading.map((heading, id) => (
          <th key={classes[id]} className={styles[classes[id]]}>
            {heading}
          </th>
        ))}
      </tr>

      {(type === "prescription" ? prescription : data).map((row) => {
        return (
          <tr className={styles[`tr-${userInfo.role}`]}>
            {classes.map((text, id) => (
              <td
                key={classes[id]}
                className={{ width: `${100 / classes.length}%` }}
              >
                {row[classes[id]]}
              </td>
            ))}
          </tr>
        );
      })}
    </table>
  );
};

export default PrescriptionTable;
