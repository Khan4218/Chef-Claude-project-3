//challenge 1
const nums = [2, 2, 3, 4, 5]
const map1 = nums.map((x) => {
  x * 2
});

console.log(map1)


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
})

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const ary = pokemon.map((name) => {
  return `<p>${name}</P>`
})

/* Challenge 4
    /**
     * Challenge: manually turn this string array into an array of
     * JSX elements by surrounding each ninja turtle with an <h2> element
     */
export default function App() {
  const ninjaTurtles =
    [
      <h1>Donatello</h1>,
      <h1>Michaelangelo</h1>,
      <h1>Rafael</h1>,
      <h1>Leonardo</h1>
    ]
  return (
    <main>
      {ninjaTurtles}
    </main>
  )
}



