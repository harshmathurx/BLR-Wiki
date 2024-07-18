import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import supabase from "../supabaseClient";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  async function fetchCategories() {
    try {
      let { data: categories, error } = await supabase
        .from("categories")
        .select("id, name, emoji, places (id, name, href)");

      if (error) {
        console.error("There is an error", error);
        return [];
      }

      // console.log("Initial", categories)
      return categories;
    } catch (error) {
      console.error("There is an error", error);
      return [];
    }
  }

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      // console.log("Fetched Categories", data);
      setCategories(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>BLR Wiki</title>
        <meta name="description" content="good morning, kappi for one?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="appHeader">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default Home;
