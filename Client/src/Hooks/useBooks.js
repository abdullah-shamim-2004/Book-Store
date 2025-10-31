import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      axios("http://localhost:5000/books")
        .then((res) => setBooks(res.data.books))
        .then((err) => setError(err))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { books, loading, error };
};

export default useBooks;
