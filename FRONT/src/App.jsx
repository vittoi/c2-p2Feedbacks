import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import AppNavbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import FeedBackPage from "./pages/FeedbackPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppNavbar />

          <Routes>
            <Route path="/" element={<FeedBackPage />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
