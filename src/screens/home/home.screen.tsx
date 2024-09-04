import {
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

import { Box, Layout, Screen, ScreenHeader } from "@/common";

import { HomeAddBrag } from "./home-add-brag";
import { HomeRecentBrags } from "./home-recent-brags";
import { HomeStats } from "./home-stats";

function useHook1() {
  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { countRef };
}

function useHook2() {
  const { countRef } = useHook1();

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(countRef.current);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    count,
  };
}

function App2() {
  const { count } = useHook2();

  console.log("App2 render");

  return <button>{count}</button>;
}

export function HomeScreen() {
  return (
    <Screen>
      <App2 />
      <Layout direction="column" gap="1rem">
        <ScreenHeader />

        <main>
          <Layout direction="column" gap="2rem">
            <HomeAddBrag />

            <Layout direction="row" gap="2rem">
              <Box width="50%">
                <HomeRecentBrags />
              </Box>
              <Box width="50%">
                <HomeStats />
              </Box>
            </Layout>
          </Layout>
        </main>
      </Layout>
    </Screen>
  );
}
