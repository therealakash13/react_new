import { useEffect, useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import axios from "axios";

export default function App() {
  const [imgList, setImgList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageHandler = (direction) => {
    setPage((prev) => {
      if (direction === "down" && prev <= 1) return prev;
      return direction === "up" ? prev + 1 : prev - 1;
    });
  };

  useEffect(() => {
    async function fetchGallery() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=12`
        );
        setImgList(response.data);
      } catch (error) {
        console.log("Error loading gallery", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, [page]);

  return (
    <div className="h-screen w-full flex font-funnel">
      <Sidebar />
      <Main
        galleryData={imgList}
        page={page}
        pageHandler={pageHandler}
        loadingState={loading}
      />
    </div>
  );
}
