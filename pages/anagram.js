import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Anagram() {
  const anagramStrings = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
  let result = {};

  const loopAnagram = arr => {
    arr.forEach(word => {
      const hashAnagrams = word.split("");
      const hashLength = hashAnagrams.length;
      arr.forEach(word => {
        let count = 0;
        
        for (var key in result) {
          if (result.hasOwnProperty(key) && result[key].includes(word)) {
            return;
          }
        }

        if (hashAnagrams.length !== word.length) return false

        hashAnagrams.forEach(anagram => {
          if (word.includes(anagram)) {
            count += 1;
          }
        });

        if (count === hashLength) {
          if (result[hashAnagrams]) {
            result[hashAnagrams].push(word);
          } else {
            result[hashAnagrams] = [word];
          }
        }
      })
    });

    return result
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Anagram Test</title>
        <meta name="description" content="Anagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h3>Anagram result</h3>
        {Object.keys(loopAnagram(anagramStrings)).map((key,index) => (
          <div key={index}>
            <div>{key}: [{result[key].toString()}]</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}
