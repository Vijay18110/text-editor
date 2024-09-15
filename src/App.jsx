import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './conponents/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
function App() {
  const [binary, setbaniry] = useState(1);
  const headerref = useRef();
  const bodyref = useRef();

  const getvalue = (val) => {
    if (binary) {
      headerref.current.style.backgroundColor = "black"
      headerref.current.style.color = "white"
      document.getElementById("root").style.backgroundColor = "#262525"
      document.getElementById("root").style.color = "white"


      setbaniry(0);
    }
    else {
      headerref.current.style.backgroundColor = "white"
      headerref.current.style.color = "black"
      document.getElementById("root").style.backgroundColor = "white"
      document.getElementById("root").style.color = "black"

      setbaniry(1)
    }

  }


  const toastOption = {
    position: "top-left",
    autoClose: 3000,
    pauseOnHover: true
  }
  const reftext = useRef();
  const [Text, setText] = useState("")

  const [Characters, setcharaters] = useState(0)
  const [wordscount, setwordscount] = useState(0)
  useEffect(() => {
    Count();
  }, [Text])
  const Count = () => {
    setwordscount(Text.trim().split(' ').length);
    setcharaters(Text.length);
  }
  const touppercase = () => {
    setText((Text) => Text.toUpperCase());
    toast.success("converted into Uppercase", toastOption)
  }
  const tolowercase = () => {
    setText((Text) => Text.toLowerCase());
    toast.success("converted into lowercase", toastOption)

  }
  const clear = () => {
    setText(" ");
    toast.success("text cleared", toastOption)

  }
  const Trimspaces = () => {
    setText((text) => text.trim())
    toast.success("spaces removed", toastOption)

  }
  const COPY = useCallback(() => {
    reftext.current?.select();
    // refpassword.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(Text)
    toast.success("text coppied", toastOption)


  }, [Text])
  const PASTE = useCallback(() => {
    reftext.current?.select();
    toast.success("your text is pasted", toastOption)
    // window.navigator.clipboard.writeText(Text)

  }, [Text])
  return (
    <>
      <header ref={headerref} className='' >
        <div className="contanier  mainContainer pe-5  p-2">
          <div className="row">
            <div className="col-4    ps-4">
              <h1 className='d-inline'>TextEditor.
                <span className='d-inline fs-5 com ps-0'> com</span>
              </h1>
              <div className='d-inline fs-3 ms-2 home' > Home</div>
            </div>
            <div className="col-8 text-end  dark align-item-center pe-5 justify-content-end fs-5">


              <label className="switch">
                <input onChange={(e) => getvalue(e.target.value)} type="checkbox" name='checkbox' />
                <span className="slider round"></span>
              </label>

              <span>    Enable Darkmode </span>
            </div>
          </div>
        </div>
      </header>
      <main ref={bodyref}>

        <div className="container  middlepart mt-5 pe-5 ps-5">
          <div className="heading">
            <h1>Enter Text Below To Customize</h1>
          </div>
          <textarea ref={reftext} name="" id="" value={Text} onChange={(e) => setText(e.target.value)} className='w-100  mt-3' rows={3} cols={3} ></textarea>
          <div className="buttons mt-2">
            <Button text={Text} name="UPPERCASE" fn={touppercase} ></Button>
            <Button text={Text} name="LOWERCASE" fn={tolowercase}  ></Button>
            <Button text={Text} name="CLEAR" fn={clear} ></Button>
            <Button text={Text} name="COPY TEXT" fn={COPY}></Button>
            <Button text={Text} name="CLEAR SPACES" fn={Trimspaces}></Button>
            <Button text={Text} name="PASTE" fn={PASTE}></Button>
          </div>
          <div className="textsummary mt-4">
            <h1>Your Text Summary</h1>
            <p>{wordscount} Words and {Characters} Characters</p>
            <p>0 Minutes To Read  </p>
            <h1>Preview</h1>
            <p>{Text}</p>
          </div>
        </div>
      </main>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
