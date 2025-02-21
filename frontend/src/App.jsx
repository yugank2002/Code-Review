import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import './App.css'
import Markdown from "react-markdown"
import axios from "axios"
import { useEffect, useState} from "react"

function App() {
  const [code, setcode] = useState(` function sum() {
    return 1+1;
    }`)

    const [review, setreview] = useState(``)
  
useEffect(() => {
  prism.highlightAll()
})

async function reviewCode(){
  const response = await axios.post('http://localhost:3000/ai/get-review', {code})
  setreview(response.data)

}
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setcode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript,"javascript")}
              padding={10}
              style={{
                fontSize: 18,
                
              
                height: "100%",
                width: "100%",
                boxSizing: "border-box",
                }}


            />
              
          </div>
          <div className="review">
            <button onClick={reviewCode}>Review</button>
          </div>
        </div>
        <div className="right">
          <Markdown>{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
