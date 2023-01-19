import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Layout } from "./components/layout";
import { Characters } from "./pages/characters";
import { Homepage } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HelmetProvider>
          <Layout>
            <Helmet>
              <title>Rick and Morty | Homepage</title>
            </Helmet>
            <Homepage />
          </Layout>
        </HelmetProvider>
      </>
    ),
  },
  {
    path: "/characters",
    element: (
      <>
        <HelmetProvider>
          <Layout>
            <Helmet>
              <title>Rick and Morty | Characters</title>
            </Helmet>
            <Characters />
          </Layout>
        </HelmetProvider>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
