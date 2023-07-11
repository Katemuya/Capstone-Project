import GlobalStyle from "../styles";
import Head from "next/head";
import { useImmerLocalStorageState } from "../lib/useImmerLocalSorageState";
import initialShiftsInfo from "../lib/InitialShiftsInfo";
import initialEvents from "../lib/db";
import { useMemo } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const shiftsInfoMemoized = useMemo(
    () => ({
      defaultValue: initialShiftsInfo,
    }),
    []
  );

  const eventsMemoized = useMemo(
    () => ({
      defaultValue: initialEvents,
    }),
    []
  );

  const [shiftsInfo, setShiftsInfo] = useImmerLocalStorageState(
    "shifts-info",
    shiftsInfoMemoized
  );

  const [events, setEvents] = useImmerLocalStorageState(
    "events",
    eventsMemoized
  );
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        shiftsInfo={shiftsInfo}
        setShiftsInfo={setShiftsInfo}
        events={events}
        setEvents={setEvents}
      />
    </>
  );
}
