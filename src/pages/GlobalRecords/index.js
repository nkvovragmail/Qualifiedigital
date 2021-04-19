// Globals
import React, { useReducer, useEffect, useState } from "react";

// Components
import { Record } from "components/Record";

// mock function for retrieve data
import { mockFetch } from 'util/mockFetch';

// reducer
import { records } from "services/records";

import { STORE_RECORD_DATA } from 'services/records/actionTypes';

// button
import { Button } from "components/Button";

// Component
function GlobalRecords() {
  const [state, dispatch] = useReducer(records, { allRecords: [] });

  const [dataExistText, setDataExistText] = useState('');
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setDataExistText('Loading...');
    setLoading(true);
    const dataResponse = await mockFetch();
    dataResponse().then((records) => {
      // dispatch method to store records data in state
      dispatch(
        {
          type: STORE_RECORD_DATA,
          payload: records,
        }
      )
      setDataExistText('');
      setLoading(false);
    }).catch((err) => {
      setDataExistText(err?.message);
      setLoading(false);
    });
  }, []);


  return (
    <div className="qd-page qd-global_records">
      <h1>Top Records of 2020</h1>

      <div className="qd-page-content">
        {state?.allRecords?.length > 0 && state?.allRecords?.slice(0, limit)?.map((record) => {
          return <Record key={record.id} data={record} />;
        })}
      </div>
      {
        state?.allRecords?.length > 0 && limit !== state?.allRecords?.length && !loading ? 
        <div className="qd-page-button">
          <Button onClick={() => setLimit(limit + 10)}>Load More</Button>
        </div> : null
      }
      {
        dataExistText ?
        <p>{dataExistText}</p> : null
      }
    </div>
  );
}

export { GlobalRecords };
